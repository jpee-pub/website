import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Activities } from "./components/Activities";
import { Alliance } from "./components/Alliance";
import { Archive } from "./components/Archive";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Activities />
        <Alliance />
        <Archive />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
