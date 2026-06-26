import { Hero } from "./components/2. Hero";
import { About } from "./components/3. About";
import { Activities } from "./components/4. Activities";
import { Alliance } from "./components/5. Alliance";
import { Archive } from "./components/7. Archive";
import { MemberGreeting } from "./components/6. MemberGreeting";
import { Contact } from "./components/8. Contact";
import { Header } from "./components/0. Header";
import { Career } from "./components/9. Career";
import { Footer } from "./components/Footer";
import { Intro } from "./components/1. Intro";

import './styles/globals.css'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
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
      <Footer />
    </div>
  );
}
