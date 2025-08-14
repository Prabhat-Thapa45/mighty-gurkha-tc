import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";
import Services from "./components/Services";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Reviews />
      <Contact />
    </main>
  );
}