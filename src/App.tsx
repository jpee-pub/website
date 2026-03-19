import { Hero } from "./components/1. Hero";
import { About } from "./components/2. About";
import { Activities } from "./components/3. Activities";
import { Alliance } from "./components/5. Alliance";
import { Archive } from "./components/6. Archive";
import { MemberGreeting } from "./components/4. MemberGreeting";
import { Contact } from "./components/7. Contact";
import { Header } from "./components/0. Header";
import { Career } from "./components/8. Career";
import { Footer } from "./components/Footer";

import './styles/globals.css'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
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
