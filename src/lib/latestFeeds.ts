export type FeedSource = "youtube" | "note";

export type FeedItem = {
  id: string;
  title: string;
  link: string;
  thumbnail: string;
  excerpt: string;
  source: FeedSource;
  publishedAt: number;
};

const NOTE_RSS_PROXY = "/api/note-rss";
const YOUTUBE_RSS_PROXY = "/api/youtube-rss";
const ONE_MONTH_MS = 30 * 24 * 60 * 60 * 1000;
const EXCERPT_LENGTH = 100;
const MEDIA_NS = "http://search.yahoo.com/mrss/";
const YT_NS = "http://www.youtube.com/xml/schemas/2015";

function isWithinLastMonth(publishedAt: number, now: number): boolean {
  return Number.isFinite(publishedAt) && publishedAt >= now - ONE_MONTH_MS;
}

function decodeHtmlEntities(text: string): string {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = text;
  return textarea.value;
}

function toExcerpt(htmlOrText: string): string {
  const withoutTags = htmlOrText.replace(/<[^>]+>/g, " ");
  const decoded = decodeHtmlEntities(withoutTags);
  const normalized = decoded
    .replace(/続きをみる/g, "")
    .replace(/\s+/g, " ")
    .trim();

  if (!normalized) return "";

  const chars = Array.from(normalized);
  if (chars.length <= EXCERPT_LENGTH) return normalized;
  return `${chars.slice(0, EXCERPT_LENGTH).join("")}…`;
}

function firstEl(parent: Element, ...names: string[]): Element | undefined {
  for (const name of names) {
    const found = parent.getElementsByTagName(name)[0];
    if (found) return found;
  }
  return undefined;
}

function firstNs(parent: Element, ns: string, localName: string): Element | undefined {
  return parent.getElementsByTagNameNS(ns, localName)[0];
}

function textContent(parent: Element, tagName: string): string {
  return firstEl(parent, tagName)?.textContent?.trim() ?? "";
}

function noteThumbnail(item: Element): string {
  const mediaThumbs = item.getElementsByTagName("media:thumbnail");
  if (mediaThumbs[0]?.textContent?.trim()) {
    return mediaThumbs[0].textContent.trim();
  }

  const nsThumb = firstNs(item, MEDIA_NS, "thumbnail");
  if (nsThumb) {
    return nsThumb.getAttribute("url")?.trim() || nsThumb.textContent?.trim() || "";
  }

  return "";
}

function youtubeThumbnail(entry: Element): string {
  const mediaThumb =
    firstEl(entry, "media:thumbnail") || firstNs(entry, MEDIA_NS, "thumbnail");
  const fromAttr = mediaThumb?.getAttribute("url")?.trim();
  if (fromAttr) return fromAttr;

  const videoId =
    firstEl(entry, "yt:videoId")?.textContent?.trim() ||
    firstNs(entry, YT_NS, "videoId")?.textContent?.trim();
  return videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : "";
}

function youtubeLink(entry: Element): string {
  const links = Array.from(entry.getElementsByTagName("link"));
  const alternate =
    links.find((link) => link.getAttribute("rel") === "alternate") ?? links[0];
  return alternate?.getAttribute("href")?.trim() ?? "";
}

function youtubeDescription(entry: Element): string {
  const description =
    firstEl(entry, "media:description") || firstNs(entry, MEDIA_NS, "description");
  return description?.textContent?.trim() ?? "";
}

function parseXml(xmlText: string, label: string): Document {
  const doc = new DOMParser().parseFromString(xmlText, "application/xml");
  if (doc.querySelector("parsererror")) {
    throw new Error(`${label} の解析に失敗しました`);
  }
  return doc;
}

function parseNoteRss(xmlText: string, now: number): FeedItem[] {
  const doc = parseXml(xmlText, "Note RSS");

  return Array.from(doc.getElementsByTagName("item"))
    .map((item) => {
      const link = textContent(item, "link");
      const guid = textContent(item, "guid") || link;
      const publishedAt = Date.parse(textContent(item, "pubDate"));

      return {
        id: guid,
        title: textContent(item, "title"),
        link,
        thumbnail: noteThumbnail(item),
        excerpt: toExcerpt(
          textContent(item, "description") || textContent(item, "content"),
        ),
        source: "note" as const,
        publishedAt,
      };
    })
    .filter((item) => item.link && isWithinLastMonth(item.publishedAt, now));
}

function parseYoutubeAtom(xmlText: string, now: number): FeedItem[] {
  const doc = parseXml(xmlText, "YouTube RSS");

  return Array.from(doc.getElementsByTagName("entry"))
    .map((entry) => {
      const link = youtubeLink(entry);
      const videoId =
        firstEl(entry, "yt:videoId")?.textContent?.trim() ||
        firstNs(entry, YT_NS, "videoId")?.textContent?.trim() ||
        link;
      const publishedAt = Date.parse(textContent(entry, "published"));

      return {
        id: videoId,
        title: textContent(entry, "title"),
        link,
        thumbnail: youtubeThumbnail(entry),
        excerpt: toExcerpt(youtubeDescription(entry)),
        source: "youtube" as const,
        publishedAt,
      };
    })
    .filter((item) => item.link && isWithinLastMonth(item.publishedAt, now));
}

async function fetchXmlFeed(url: string, label: string, signal: AbortSignal): Promise<string> {
  const response = await fetch(url, {
    cache: "no-store",
    signal,
  });
  if (!response.ok) {
    throw new Error(`${label} の取得に失敗しました (${response.status})`);
  }
  return response.text();
}

async function fetchNoteFeed(signal: AbortSignal, now: number): Promise<FeedItem[]> {
  const xmlText = await fetchXmlFeed(NOTE_RSS_PROXY, "Note RSS", signal);
  return parseNoteRss(xmlText, now);
}

async function fetchYoutubeFeed(signal: AbortSignal, now: number): Promise<FeedItem[]> {
  const xmlText = await fetchXmlFeed(YOUTUBE_RSS_PROXY, "YouTube RSS", signal);
  return parseYoutubeAtom(xmlText, now);
}

export async function fetchLatestFeeds(signal: AbortSignal): Promise<FeedItem[]> {
  const now = Date.now();
  const [noteResult, youtubeResult] = await Promise.allSettled([
    fetchNoteFeed(signal, now),
    fetchYoutubeFeed(signal, now),
  ]);

  const items: FeedItem[] = [];
  if (noteResult.status === "fulfilled") items.push(...noteResult.value);
  if (youtubeResult.status === "fulfilled") items.push(...youtubeResult.value);

  if (items.length === 0) {
    const noteReason =
      noteResult.status === "rejected" ? String(noteResult.reason) : "";
    const youtubeReason =
      youtubeResult.status === "rejected" ? String(youtubeResult.reason) : "";
    throw new Error(
      noteReason || youtubeReason || "最新フィードを取得できませんでした",
    );
  }

  return items.sort((a, b) => b.publishedAt - a.publishedAt);
}
