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
    <>
      {/* ── Hero ── */}
      <section className="pt-[196px] md:pt-[196px] pb-8 md:pb-16">
        <Container>
          <FadeIn>
            <div className="flex flex-col gap-y-4 md:gap-y-6">
              <h1 className="font-h1 text-foreground">
                Start a Conversation
              </h1>
              <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
                For general inquiries, partnerships, or anything else. We respond within 1 business day.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ── Form ── */}
      <section className="py-[74px] md:py-[148px]">
        <Container>
          <FadeIn>
            <div className="grid grid-cols-12 gap-x-4 gap-y-8 md:gap-x-8">
              <div className="col-span-12 md:col-span-3">
                <div className="flex flex-col gap-y-4">
                  <a href="mailto:hello@purplesquirrels.ai" className="link-underline text-sm text-muted hover:text-foreground transition-colors">
                    hello@purplesquirrels.ai
                  </a>
                  <a href="#" className="link-underline text-sm text-muted hover:text-foreground transition-colors">
                    LinkedIn
                  </a>
                  <a href="#" className="link-underline text-sm text-muted hover:text-foreground transition-colors">
                    Twitter / X
                  </a>
                </div>
              </div>

              <div className="col-span-12 md:col-span-9">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-y-2">
                      <label htmlFor="name" className="text-xs font-medium uppercase tracking-widest text-muted">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Jane Doe"
                        className="w-full bg-surface border border-border rounded-sm px-4 py-3 text-foreground text-sm focus:outline-none focus:border-muted transition-colors placeholder:text-muted placeholder:opacity-60"
                      />
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <label htmlFor="email" className="text-xs font-medium uppercase tracking-widest text-muted">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="jane@company.com"
                        className="w-full bg-surface border border-border rounded-sm px-4 py-3 text-foreground text-sm focus:outline-none focus:border-muted transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-2">
                    <label htmlFor="message" className="text-xs font-medium uppercase tracking-widest text-muted">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Tell us about your project..."
                      className="w-full bg-surface border border-border rounded-sm px-4 py-3 text-foreground text-sm focus:outline-none focus:border-muted transition-colors resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
