import Header from "./components/Header";
import Hero from "./components/Hero";
import SelectedWork from "./components/SelectedWork";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      
      <Header />

      <main id="main-content">
        <Hero />
        <SelectedWork />
        <About />
        <Experience />
      </main>

      <Footer />
    </>
  );
}
