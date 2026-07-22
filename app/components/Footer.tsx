"use client";

import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <footer id="contact" className="site-footer" aria-labelledby="footer-cta-title">
      <div className="footer-grid-bg" aria-hidden="true" />

      <div className="footer-inner">
        {/* Top — CTA block */}
        <div>
          <p className="footer-cta-eyebrow">Next chapter</p>
          <ScrollReveal as="h2" id="footer-cta-title" className="footer-cta-headline">
            Let&apos;s design decision systems where <em>clarity is a safety feature.</em>
          </ScrollReveal>

          <ScrollReveal as="div" delay={0.1} className="footer-links">
            <a href="mailto:sidhiqe0001@gmail.com" className="footer-link-primary">
              Send an inquiry <span aria-hidden="true">→</span>
            </a>
            <a
              href="https://www.linkedin.com/in/asidhiqe/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link-secondary"
            >
              LinkedIn
            </a>
            <a href="/resume.pdf" download className="footer-link-secondary">
              Resume PDF
            </a>
          </ScrollReveal>
        </div>

        {/* Bottom — Copyright and social links */}
        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Aboobacker Sidhiqe. Designed and built with focus.
          </p>

          <div className="footer-social" aria-label="Social connections">
            <a href="https://www.linkedin.com/in/asidhiqe/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="/resume.pdf" download>
              Resume
            </a>
            <a href="mailto:sidhiqe0001@gmail.com">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
