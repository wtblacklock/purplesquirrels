import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { FadeIn } from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'AI Transformation',
  description: 'From AI-absent to AI-native. Strategy, process redesign, people training, and implementation roadmap — all three, or none of it sticks.',
};

function Placeholder({ className = '', aspect = 'aspect-video' }: { className?: string; aspect?: string }) {
  return (
    <div className={`w-full overflow-hidden ${aspect} ${className}`}>
      <div className="w-full h-full placeholder-image" />
    </div>
  );
}

export default function AITransformation() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-[196px] md:pt-[196px] pb-8 md:pb-16">
        <Container>
          <FadeIn>
            <div className="flex flex-col gap-y-4 md:gap-y-6">
              <h1 className="font-h1 text-foreground">
                AI Transformation
              </h1>
              <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
                From AI-absent to AI-native. People, processes, and products — all three, or none of it sticks.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ── Hero image ── */}
      <Container>
        <FadeIn delay={0.1}>
          <Placeholder aspect="aspect-video" />
        </FadeIn>
      </Container>

      {/* ── Three services grid ── */}
      <section className="py-[74px] md:py-[148px]">
        <Container>
          <FadeIn>
            <div className="grid grid-cols-12 gap-x-4 gap-y-8 md:gap-x-8">
              {/* Left label col */}
              <div className="col-span-12 md:col-span-3">
                <span className="text-xs font-medium uppercase tracking-widest text-muted">What we do</span>
              </div>
              {/* Three service columns with left borders */}
              <div className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-8">
                <div className="flex flex-col gap-y-4 border-t md:border-t-0 md:border-l border-border pt-8 md:pt-0 md:pl-4">
                  <span className="text-xs font-medium uppercase tracking-widest text-muted">01</span>
                  <Placeholder aspect="aspect-[4/3]" className="mb-2" />
                  <h3 className="font-display text-xl text-foreground uppercase leading-tight">
                    AI Strategy
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    We audit your business for AI leverage points. A prioritized roadmap of high-value AI use cases mapped to your business outcomes.
                  </p>
                </div>

                <div className="flex flex-col gap-y-4 border-t md:border-t-0 md:border-l border-border pt-8 md:pt-0 md:pl-4">
                  <span className="text-xs font-medium uppercase tracking-widest text-muted">02</span>
                  <Placeholder aspect="aspect-[4/3]" className="mb-2" />
                  <h3 className="font-display text-xl text-foreground uppercase leading-tight">
                    People & Training
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Transformation fails when only the engineering team changes. We train everyone — from leadership to operators — to work alongside AI.
                  </p>
                </div>

                <div className="flex flex-col gap-y-4 border-t md:border-t-0 md:border-l border-border pt-8 md:pt-0 md:pl-4">
                  <span className="text-xs font-medium uppercase tracking-widest text-muted">03</span>
                  <Placeholder aspect="aspect-[4/3]" className="mb-2" />
                  <h3 className="font-display text-xl text-foreground uppercase leading-tight">
                    Implementation Roadmap
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Strategy without execution is decoration. A phased plan with clear milestones, owners, and success metrics — then we stay involved to make sure it ships.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ── Detail section ── */}
      <section className="py-[74px] md:py-[148px] border-t border-border">
        <Container>
          <FadeIn>
            <div className="grid grid-cols-12 gap-x-4 gap-y-8 md:gap-x-8">
              <div className="col-span-12 md:col-span-3">
                <span className="text-xs font-medium uppercase tracking-widest text-muted">Also included</span>
              </div>
              <div className="col-span-12">
                <h2 className="font-h2 text-foreground mb-8 md:mb-12">
                  Product transformation. Process redesign. AI tooling.
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
                  <p className="text-muted leading-relaxed text-base md:text-lg">
                    We audit your business for AI leverage points. Not every process needs an LLM — but many do, and identifying which ones is worth more than any implementation.
                  </p>
                  <p className="text-muted leading-relaxed text-base md:text-lg">
                    Practical, not theoretical. We run workshops in the tools your teams will actually use.
                  </p>
                </div>
                <Button href="/contact" size="lg">Start a Conversation</Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
