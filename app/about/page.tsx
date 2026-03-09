import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { FadeIn } from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'About',
  description: "AI engineering and transformation, done by people who've shipped it themselves.",
};

function Placeholder({ className = '', aspect = 'aspect-video' }: { className?: string; aspect?: string }) {
  return (
    <div className={`w-full overflow-hidden ${aspect} ${className}`}>
      <div className="w-full h-full placeholder-image" />
    </div>
  );
}

export default function About() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-[196px] md:pt-[196px] pb-8 md:pb-16">
        <Container>
          <FadeIn>
            <div className="flex flex-col gap-y-4 md:gap-y-6">
              <h1 className="font-h1 text-foreground">
                Where scale begins
              </h1>
              <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
                AI engineering and transformation, done by people who've shipped it themselves.
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

      {/* ── Positioning ── */}
      <section className="py-[74px] md:py-[148px]">
        <Container>
          <FadeIn>
            <div className="grid grid-cols-12 gap-x-4 gap-y-8 md:gap-x-8">
              <div className="col-span-12 md:col-span-3">
                <span className="text-xs font-medium uppercase tracking-widest text-muted">Positioning</span>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h2 className="font-h2 text-foreground mb-8 md:mb-12">
                  Product & Growth Engineering, built by operators.
                </h2>
                <div className="flex flex-col gap-8 md:gap-12 max-w-[55%]">
                  <p className="text-muted leading-relaxed text-base md:text-lg">
                    Today it is easy to ship something. It is hard to make it durable, adopted, and commercially viable.
                  </p>
                  <p className="text-muted leading-relaxed text-base md:text-lg">
                    We work at the intersection of AI engineering and transformation. We step in after the prototype and before scale breaks. We fix what is fragile and engineer what comes next.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ── Team ── */}
      <section className="py-[74px] md:py-[148px] border-t border-border">
        <Container>
          <FadeIn>
            <div className="grid grid-cols-12 gap-x-4 gap-y-12 md:gap-x-8">
              <div className="col-span-12 md:col-span-3">
                <span className="text-xs font-medium uppercase tracking-widest text-muted">Team</span>
              </div>
              <div className="col-span-12">
                <h2 className="font-h2 text-foreground mb-8 md:mb-12">Small by design.</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  <div className="flex flex-col gap-y-5">
                    <Placeholder aspect="aspect-[4/5]" />
                    <h3 className="font-display text-xl text-foreground uppercase">Jackson Blacklock</h3>
                    <p className="text-xs font-medium uppercase tracking-widest text-muted">Scale Strategist</p>
                    <p className="text-muted text-sm leading-relaxed">
                      Background in business operations, systems thinking, and enterprise execution. MBA. Focuses on operational alignment, process design, and roadmap prioritization.
                    </p>
                  </div>
                  <div className="flex flex-col gap-y-5">
                    <Placeholder aspect="aspect-[4/5]" />
                    <h3 className="font-display text-xl text-foreground uppercase">William Blacklock</h3>
                    <p className="text-xs font-medium uppercase tracking-widest text-muted">Product & AI Operator</p>
                    <p className="text-muted text-sm leading-relaxed">
                      Deep experience across product strategy, growth execution, and automation systems. Builds consumer brands, launches digital products, connects product to revenue.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
