import Header from "./components/Header";
import Hero from "./components/Hero";
import SelectedWork from "./components/SelectedWork";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import BannerScroll from "./components/BannerScroll";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      {/* Fixed Sticky Frame Sequence Canvas on Right Side for Desktop */}
      <div className="desktop-banner-wrapper">
        <BannerScroll />
      </div>

      <Header />

      <main id="main-content" className="relative z-10 w-full min-h-screen">
        <div className="portfolio-layout-grid">
          <div className="portfolio-content-left">
            <Hero />
            <SelectedWork />
            <About />
            <Testimonials />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
