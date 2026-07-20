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
            Let's design systems that <em>matter.</em>
          </ScrollReveal>

          <ScrollReveal as="div" delay={0.1} className="footer-links">
            <a href="mailto:aboobacker.sidhiqe@example.com" className="footer-link-primary">
              Send an inquiry <span aria-hidden="true">→</span>
            </a>
            <a
              href="https://linkedin.com/in/aboobacker-sidhiqe"
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
            <a href="https://linkedin.com/in/aboobacker-sidhiqe" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/asidhiqe" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="mailto:aboobacker.sidhiqe@example.com">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
