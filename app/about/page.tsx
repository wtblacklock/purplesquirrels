import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { FadeIn } from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'About',
  description: "AI engineering and transformation, done by people who've shipped it themselves.",
};

export default function About() {
  return (
    <>
      <div className="pt-36 pb-20 md:pt-44 md:pb-28 border-b border-border">
        <Container>
          <FadeIn>
            <span className="text-xs font-sans font-medium uppercase tracking-widest text-muted block mb-8">
              Company
            </span>
            <h1 className="font-display font-bold uppercase text-hero-sm md:text-hero-md text-foreground mb-8 leading-[0.92]">
              Where scale begins
            </h1>
            <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-2xl">
              AI engineering and transformation, done by people who've shipped it themselves.
            </p>
          </FadeIn>
        </Container>
      </div>

      <Section label="Positioning" title="Product & Growth Engineering, built by operators.">
        <p>
          Today it is easy to ship something. It is hard to make it durable, adopted, and commercially viable.
        </p>
        <p>
          We work at the intersection of AI engineering and transformation. We step in after the prototype and before scale breaks. We fix what is fragile and engineer what comes next.
        </p>
      </Section>

      <Section label="Team" title="Small by design.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="border border-border p-8 rounded-md">
            <h3 className="font-display font-bold text-xl text-foreground mb-3">Jackson Blacklock</h3>
            <p className="text-xs font-medium uppercase tracking-widest text-accent mb-5">Scale Strategist</p>
            <p>
              Background in business operations, systems thinking, and enterprise execution. MBA. Focuses on operational alignment, process design, and roadmap prioritization.
            </p>
          </div>
          <div className="border border-border p-8 rounded-md">
            <h3 className="font-display font-bold text-xl text-foreground mb-3">William Blacklock</h3>
            <p className="text-xs font-medium uppercase tracking-widest text-accent mb-5">Product & AI Operator</p>
            <p>
              Deep experience across product strategy, growth execution, and automation systems. Builds consumer brands, launches digital products, connects product to revenue.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
