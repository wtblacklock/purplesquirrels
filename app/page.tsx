import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { FadeIn, TypewriterIn, ButtonReveal } from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'purple squirrels | AI Engineering & Transformation',
  description: 'The businesses that win the next decade will be AI-native. We build the engineering and transformation systems that get you there.',
};

function Placeholder({ className = '', aspect = 'aspect-video' }: { className?: string; aspect?: string }) {
  return (
    <div className={`w-full overflow-hidden ${aspect} ${className}`}>
      <div className="w-full h-full placeholder-image" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-[170px] pb-0">
        <Container>
          <FadeIn>
            <h1 className="font-h1 text-foreground mb-4 md:mb-6 max-w-5xl">
              Build AI-native.{' '}Win the next decade.
            </h1>
            <p className="text-xl md:text-2xl text-muted leading-snug max-w-2xl mb-10 md:mb-14">
              The businesses that win the next decade will be AI-native. We build the engineering and transformation systems that get you there.
            </p>
            <div className="flex flex-wrap gap-4">
              <ButtonReveal delay={0.3}>
                <Button href="/contact" size="lg">
                  <TypewriterIn delay={0}>Start a Conversation</TypewriterIn>
                </Button>
              </ButtonReveal>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ── Hero image — 65px below buttons ── */}
      <div className="mt-[65px]">
        <Container>
          <FadeIn delay={0.1}>
            <Placeholder aspect="aspect-video" />
          </FadeIn>
        </Container>
      </div>

      {/* ── Services grid ── */}
      <section className="py-16 md:py-32">
        <Container>
          <FadeIn>
            <div className="grid grid-cols-12 gap-x-4 gap-y-8 md:gap-x-8">
              <div className="col-span-12 md:col-span-3">
                <span className="text-xs font-medium uppercase tracking-widest text-muted">What we do</span>
              </div>
              <div className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                {/* Engineering card */}
                <div className="border border-border p-8 flex flex-col gap-y-6 group hover:border-muted transition-colors">
                  <span className="text-xs font-medium uppercase tracking-widest text-muted">Engineering</span>
                  <h2 className="font-display text-2xl md:text-3xl text-foreground leading-tight uppercase">
                    AI Engineering
                  </h2>
                  <p className="text-muted leading-relaxed text-sm md:text-base flex-1">
                    Elite squads who use AI to build AI. Application development, agentic systems, code migration, and data engineering — shipped to production.
                  </p>
                  <Link
                    href="/ai-engineering"
                    className="link-underline inline-flex items-center gap-1.5 text-sm text-foreground"
                  >
                    Explore
                  </Link>
                </div>
                {/* Transformation card */}
                <div className="border border-border p-8 flex flex-col gap-y-6 group hover:border-muted transition-colors">
                  <span className="text-xs font-medium uppercase tracking-widest text-muted">Transformation</span>
                  <h2 className="font-display text-2xl md:text-3xl text-foreground leading-tight uppercase">
                    AI Transformation
                  </h2>
                  <p className="text-muted leading-relaxed text-sm md:text-base flex-1">
                    From AI-absent to AI-native. Strategy, process redesign, people training, and implementation roadmap — all three or none of it sticks.
                  </p>
                  <Link
                    href="/ai-transformation"
                    className="link-underline inline-flex items-center gap-1.5 text-sm text-foreground"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ── Approach ── */}
      <section className="py-16 md:py-32 border-t border-border">
        <Container>
          <FadeIn>
            <div className="grid grid-cols-12 gap-x-4 gap-y-8 md:gap-x-8">
              <div className="col-span-12 md:col-span-3">
                <span className="text-xs font-medium uppercase tracking-widest text-muted">Approach</span>
              </div>
              <div className="col-span-12">
                <h2 className="font-h2 text-foreground mb-8 md:mb-12">
                  You're not behind. You're at the starting line.
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  <p className="text-muted leading-relaxed text-base md:text-lg">
                    Every business is now being asked to compete on intelligence. The ones that move with depth — not just speed — will win.
                  </p>
                  <p className="text-muted leading-relaxed text-base md:text-lg">
                    We help companies build AI into their core: products, processes, and people. Not as a feature. As a foundation.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ── Philosophy ── */}
      <section className="py-16 md:py-32 border-t border-border">
        <Container>
          <FadeIn>
            <div className="grid grid-cols-12 gap-x-4 gap-y-8 md:gap-x-8">
              <div className="col-span-12 md:col-span-3">
                <span className="text-xs font-medium uppercase tracking-widest text-muted">Philosophy</span>
              </div>
              <div className="col-span-12">
                <p className="font-h2 text-foreground">
                  AI is a platform shift, not a feature. Companies standing still are falling behind.
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
