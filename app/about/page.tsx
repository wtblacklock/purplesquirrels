import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';

export const metadata: Metadata = {
  title: 'About',
  description: 'AI engineering and transformation, done by people who\'ve shipped it themselves.',
};

export default function About() {
  return (
    <>
      <div className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-white/5">
        <Container>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
            Where scale begins
          </h1>
          <p className="text-xl text-[#B4B8C0] max-w-2xl leading-relaxed">
            AI engineering and transformation, done by people who've shipped it themselves.
          </p>
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
        <p>
          Jackson Blacklock — Scale strategist with a background in business operations, systems thinking, and enterprise execution. MBA. Focuses on operational alignment, process design, and roadmap prioritization.
        </p>
        <p>
          William Blacklock — Product and AI operator with deep experience across product strategy, growth execution, and automation systems. Builds consumer brands, launches digital products, connects product to revenue.
        </p>
      </Section>
    </>
  );
}
