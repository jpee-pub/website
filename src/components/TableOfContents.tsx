import React, { useEffect, useState, RefObject } from 'react';

interface HeadingItem {
  id: string;
  text: string;
  level: string;
}

interface TableOfContentsProps {
  contentRef?: RefObject<HTMLElement | null>;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ contentRef }) => {
  const [headings, setHeadings] = useState<HeadingItem[]>([]);

  useEffect(() => {
    const container = contentRef?.current || document;
    const elements = Array.from(container.querySelectorAll('h2, h3')) as HTMLElement[];

    const items: HeadingItem[] = elements.map((heading, index) => {
      if (!heading.id) {
        heading.id = `toc-heading-${index}`;
      }

      return {
        id: heading.id,
        text: heading.innerText,
        level: heading.tagName.toLowerCase(),
      };
    });

    setHeadings(items);
  }, [contentRef]);

  if (headings.length === 0) return null;

  return (
    <nav className="mb-12 p-6 bg-slate-50 rounded-xl border border-slate-200 shadow-sm">
      <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-slate-200 flex items-center gap-2">
        <span className="text-[#0072ce] font-mono text-sm tracking-wider">INDEX</span> 目次
      </h2>
      <ul className="space-y-2 text-sm md:text-base">
        {headings.map((item) => (
          <li
            key={item.id}
            className={item.level === 'h3' ? 'pl-4 text-gray-600 border-l-2 border-slate-200 ml-2' : ''}
          >
            <a
              href={`#${item.id}`}
              className={`block hover:text-[#0072ce] hover:underline transition-colors ${
                item.level === 'h2' ? 'font-bold text-gray-800' : ''
              }`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};