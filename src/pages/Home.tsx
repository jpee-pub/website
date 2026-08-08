import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Hero } from "../components/2. Hero";
import { About } from "../components/3. About";
import { Activities } from "../components/4. Activities";
import { Alliance } from "../components/5. Alliance";
import { Archive } from "../components/7. Archive";
import { MemberGreeting } from "../components/6. MemberGreeting";
import { Contact } from "../components/8. Contact";
import { Intro } from "../components/1. Intro";
import { Career } from "../components/9. Career";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state && (location.state as any).scrollTo) {
      const id = (location.state as any).scrollTo;
      // Small delay to ensure the DOM is fully rendered before scrolling
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <main>
      <Intro />
      <Hero />
      <About />
      <Activities />
      <MemberGreeting />
      <Alliance />
      <Archive />
      <Contact />
      <Career />
    </main>
  );
}
