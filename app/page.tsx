import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { FadeIn } from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'TwinB | AI Engineering & Transformation',
  description: 'The businesses that win the next decade will be AI-native. We build the engineering and transformation systems that get you there.',
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-28 md:pt-44 md:pb-36">
        <Container>
          <FadeIn>
            <div className="inline-flex items-center gap-2.5 mb-10 md:mb-14">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-sans font-medium uppercase tracking-widest text-muted">
                Systems Online
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1 className="font-display font-bold uppercase text-hero-sm md:text-hero-md xl:text-hero text-foreground mb-10 md:mb-14 max-w-4xl">
              Build AI-native.{' '}
              Win the next decade.
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-end">
              <p className="text-lg md:text-xl text-muted leading-relaxed">
                The businesses that win the next decade will be AI-native. We build the engineering and transformation systems that get you there.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg">
                  Start a Conversation
                </Button>
                <Button href="/ai-engineering" variant="secondary" size="lg">
                  Explore Engineering <ArrowUpRight size={15} />
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Service cards */}
      <section className="border-t border-border">
        <Container className="px-0 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
            <FadeIn className="p-10 md:p-16 xl:p-20">
              <span className="text-xs font-sans font-medium uppercase tracking-widest text-muted block mb-10">
                01 — Engineering
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-5 leading-tight">
                AI Engineering
              </h2>
              <p className="text-muted text-base md:text-lg leading-relaxed mb-10">
                Elite squads who use AI to build AI. Application development, agentic systems, code migration, and data engineering — shipped to production.
              </p>
              <Link
                href="/ai-engineering"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground border-b border-border pb-1 hover:border-accent hover:text-accent transition-colors"
              >
                Explore <ArrowUpRight size={14} />
              </Link>
            </FadeIn>

            <FadeIn delay={0.08} className="p-10 md:p-16 xl:p-20">
              <span className="text-xs font-sans font-medium uppercase tracking-widest text-muted block mb-10">
                02 — Transformation
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-5 leading-tight">
                AI Transformation
              </h2>
              <p className="text-muted text-base md:text-lg leading-relaxed mb-10">
                From AI-absent to AI-native. Strategy, process redesign, people training, and implementation roadmap — all three or none of it sticks.
              </p>
              <Link
                href="/ai-transformation"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground border-b border-border pb-1 hover:border-accent hover:text-accent transition-colors"
              >
                Explore <ArrowUpRight size={14} />
              </Link>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Approach */}
      <section className="py-24 md:py-36 border-t border-border">
        <Container>
          <FadeIn>
            <span className="text-xs font-sans font-medium uppercase tracking-widest text-muted block mb-8">
              01 — Approach
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground leading-tight max-w-3xl mb-10">
              You're not behind. You're at the starting line.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-4xl">
              <p className="text-muted text-base md:text-lg leading-relaxed">
                Every business is now being asked to compete on intelligence. The ones that move with depth — not just speed — will win.
              </p>
              <p className="text-muted text-base md:text-lg leading-relaxed">
                We help companies build AI into their core: products, processes, and people. Not as a feature. As a foundation.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Philosophy statement */}
      <section className="py-24 md:py-36 border-t border-border">
        <Container>
          <FadeIn>
            <span className="text-xs font-sans font-medium uppercase tracking-widest text-muted block mb-8">
              03 — Philosophy
            </span>
            <p className="font-display font-bold text-3xl md:text-5xl xl:text-6xl text-foreground leading-tight max-w-4xl">
              AI is a platform shift, not a feature. Companies standing still are falling behind.
            </p>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
