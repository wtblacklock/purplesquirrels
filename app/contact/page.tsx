import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { FadeIn } from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'For general inquiries, partnerships, or anything else. We respond within 1 business day.',
};

export default function Contact() {
  return (
    <div className="pt-36 pb-28 md:pt-44 md:pb-36">
      <Container>
        <FadeIn>
          <span className="text-xs font-sans font-medium uppercase tracking-widest text-muted block mb-8">
            Get in touch
          </span>
          <h1 className="font-display font-bold uppercase text-hero-sm md:text-hero-md text-foreground mb-8 leading-[0.92]">
            Start a Conversation
          </h1>
          <p className="text-xl text-muted mb-16 leading-relaxed max-w-lg">
            For general inquiries, partnerships, or anything else. We respond within 1 business day.
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <form className="max-w-2xl space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-medium uppercase tracking-widest text-muted">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-surface border border-border rounded-md px-4 py-3 text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:border-foreground/30 transition-colors"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-medium uppercase tracking-widest text-muted">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-surface border border-border rounded-md px-4 py-3 text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:border-foreground/30 transition-colors"
                  placeholder="jane@company.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-medium uppercase tracking-widest text-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full bg-surface border border-border rounded-md px-4 py-3 text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:border-foreground/30 transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <Button type="submit" size="lg">
              Send Message
            </Button>
          </form>
        </FadeIn>
      </Container>
    </div>
  );
}
