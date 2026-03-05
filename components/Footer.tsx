import Link from 'next/link';
import { Container } from './Container';

export function Footer() {
  return (
    <footer className="border-t border-border pt-16 pb-0 bg-background">
      <Container>
        <div className="grid grid-cols-12 gap-y-12 md:gap-x-8 pb-16">
          {/* Brand + tagline */}
          <div className="col-span-12 md:col-span-6">
            <p className="text-sm text-muted leading-relaxed max-w-sm">
              AI engineering and transformation for the businesses that want to win the next decade.
            </p>
            <a
              href="mailto:hello@purplesquirrel.ai"
              className="link-underline mt-6 inline-block text-sm text-foreground"
            >
              hello@purplesquirrel.ai
            </a>
          </div>

          {/* Services */}
          <nav className="col-span-6 md:col-span-3 flex flex-col gap-y-3" aria-label="Services">
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-1">Practice</p>
            <Link href="/ai-engineering" className="link-underline text-sm text-foreground">AI Engineering</Link>
            <Link href="/ai-transformation" className="link-underline text-sm text-foreground">AI Transformation</Link>
          </nav>

          {/* Company */}
          <nav className="col-span-6 md:col-span-3 flex flex-col gap-y-3" aria-label="Company">
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-1">Company</p>
            <Link href="/about" className="link-underline text-sm text-foreground">About</Link>
            <Link href="/contact" className="link-underline text-sm text-foreground">Contact</Link>
            <a href="#" className="link-underline text-sm text-foreground">LinkedIn</a>
            <a href="#" className="link-underline text-sm text-foreground">Twitter / X</a>
          </nav>
        </div>

        {/* Copyright bar */}
        <div className="border-t border-border py-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Purple Squirrel Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-muted">Privacy Policy</span>
            <span className="text-xs text-muted">Terms of Service</span>
          </div>
        </div>
      </Container>

      {/* Giant wordmark — full width, centered */}
      <div className="overflow-hidden leading-none text-center pt-32" aria-hidden="true">
        <p
          className="font-display uppercase tracking-tight text-foreground whitespace-nowrap select-none inline-block"
          style={{ fontSize: 'clamp(4rem, 11.5vw, 13rem)', lineHeight: 0.85, opacity: 0.25 }}
        >
          Purple Squirrel
        </p>
      </div>
    </footer>
  );
}
