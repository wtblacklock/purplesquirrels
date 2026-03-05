import Link from 'next/link';
import { Container } from './Container';

export function Footer() {
  return (
    <footer className="border-t border-border pt-16 pb-12 bg-background">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-2 md:col-span-1">
            <span className="font-display font-bold text-sm uppercase tracking-widest text-foreground">
              Purple Squirrel
            </span>
            <p className="mt-4 text-sm text-muted leading-relaxed max-w-[180px]">
              AI engineering and transformation for the next decade.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-medium uppercase tracking-widest text-muted mb-1">Practice</h3>
            <Link href="/ai-engineering" className="text-sm text-foreground/60 hover:text-foreground transition-colors">AI Engineering</Link>
            <Link href="/ai-transformation" className="text-sm text-foreground/60 hover:text-foreground transition-colors">AI Transformation</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-medium uppercase tracking-widest text-muted mb-1">Company</h3>
            <Link href="/about" className="text-sm text-foreground/60 hover:text-foreground transition-colors">About</Link>
            <Link href="/contact" className="text-sm text-foreground/60 hover:text-foreground transition-colors">Contact</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-medium uppercase tracking-widest text-muted mb-1">Connect</h3>
            <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">LinkedIn</a>
            <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">Twitter / X</a>
            <a href="mailto:hello@twinb.me" className="text-sm text-foreground/60 hover:text-foreground transition-colors">hello@twinb.me</a>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} TwinB Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-muted">Privacy Policy</span>
            <span className="text-xs text-muted">Terms of Service</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
