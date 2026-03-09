import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { FadeIn } from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'AI Engineering',
  description: 'Elite squads who use AI to build AI. Application development, agentic systems, code migration, and data engineering — shipped to production.',
};

function Placeholder({ className = '', aspect = 'aspect-video' }: { className?: string; aspect?: string }) {
  return (
    <div className={`w-full overflow-hidden ${aspect} ${className}`}>
      <div className="w-full h-full placeholder-image" />
    </div>
  );
}

export default function AIEngineering() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-[196px] md:pt-[196px] pb-8 md:pb-16">
        <Container>
          <FadeIn>
            <div className="flex flex-col gap-y-4 md:gap-y-6">
              <h1 className="font-h1 text-foreground">
                AI Engineering
              </h1>
              <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
                Elite squads who use AI to build AI. You pay for features in production, not hours in Zoom.
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
                <span className="text-xs font-medium uppercase tracking-widest text-muted">What we build</span>
              </div>
              {/* Three service columns with left borders */}
              <div className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-8">
                <div className="flex flex-col gap-y-4 border-t md:border-t-0 md:border-l border-border pt-8 md:pt-0 md:pl-4">
                  <span className="text-xs font-medium uppercase tracking-widest text-muted">01</span>
                  <Placeholder aspect="aspect-[4/3]" className="mb-2" />
                  <h3 className="font-display text-xl text-foreground uppercase leading-tight">
                    Application Development
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    We build AI-native applications end-to-end. Frontend, backend, APIs — designed from the ground up to leverage AI, not bolt it on.
                  </p>
                </div>

                <div className="flex flex-col gap-y-4 border-t md:border-t-0 md:border-l border-border pt-8 md:pt-0 md:pl-4">
                  <span className="text-xs font-medium uppercase tracking-widest text-muted">02</span>
                  <Placeholder aspect="aspect-[4/3]" className="mb-2" />
                  <h3 className="font-display text-xl text-foreground uppercase leading-tight">
                    From SDLC to AI DLC
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    We apply an AI-native development lifecycle: experiment, evaluate, iterate, deploy — with proper evals and observability at every stage.
                  </p>
                </div>

                <div className="flex flex-col gap-y-4 border-t md:border-t-0 md:border-l border-border pt-8 md:pt-0 md:pl-4">
                  <span className="text-xs font-medium uppercase tracking-widest text-muted">03</span>
                  <Placeholder aspect="aspect-[4/3]" className="mb-2" />
                  <h3 className="font-display text-xl text-foreground uppercase leading-tight">
                    Custom Agentic Solutions
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Agents that don't just answer questions — they take actions. Multi-agent systems that automate complex workflows across your tooling and data.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ── Methodology section ── */}
      <section className="py-[74px] md:py-[148px] border-t border-border">
        <Container>
          <FadeIn>
            <div className="grid grid-cols-12 gap-x-4 gap-y-8 md:gap-x-8">
              <div className="col-span-12 md:col-span-3">
                <span className="text-xs font-medium uppercase tracking-widest text-muted">Methodology</span>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h2 className="font-h2 text-foreground mb-8 md:mb-12">
                  Code migration + refactors, data engineering, and analysis.
                </h2>
                <div className="flex flex-col gap-8 md:gap-12 mb-12 max-w-[55%]">
                  <p className="text-muted leading-relaxed text-base md:text-lg">
                    From greenfield builds to adding AI layers to existing products, we ship full-stack solutions with short feedback loops and zero hand-holding.
                  </p>
                  <p className="text-muted leading-relaxed text-base md:text-lg">
                    This is how you stop guessing and start knowing whether your AI is actually working.
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
