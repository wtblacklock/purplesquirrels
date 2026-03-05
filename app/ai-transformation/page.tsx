import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { FadeIn } from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'AI Transformation',
  description: 'From AI-absent to AI-native. Strategy, process redesign, people training, and implementation roadmap — all three, or none of it sticks.',
};

export default function AITransformation() {
  return (
    <>
      {/* Page header */}
      <div className="pt-36 pb-20 md:pt-44 md:pb-28 border-b border-border">
        <Container>
          <FadeIn>
            <span className="text-xs font-sans font-medium uppercase tracking-widest text-muted block mb-8">
              Practice
            </span>
            <h1 className="font-display font-bold uppercase text-hero-sm md:text-hero-md text-foreground mb-8 leading-[0.92]">
              AI Transformation
            </h1>
            <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-2xl">
              From AI-absent to AI-native. People, processes, and products — all three, or none of it sticks.
            </p>
          </FadeIn>
        </Container>
      </div>

      <Section id="strategy" label="Strategy" title="AI Strategy">
        <p>
          We audit your business for AI leverage points. Not every process needs an LLM — but many do, and identifying which ones is worth more than any implementation.
        </p>
        <p>
          We deliver a prioritized roadmap of high-value AI use cases mapped to your business outcomes.
        </p>
      </Section>

      <Section id="culture" label="People" title="People & Training">
        <p>
          Transformation fails when only the engineering team changes. We train your entire organization — from leadership to operators — on how to work effectively alongside AI systems.
        </p>
        <p>
          Practical, not theoretical. We run workshops in the tools your teams will actually use.
        </p>
      </Section>

      <Section id="governance" label="Roadmap" title="Implementation Roadmap">
        <p>
          Strategy without execution is decoration. We build a phased implementation plan with clear milestones, owners, and success metrics — then we stay involved to make sure it ships.
        </p>
      </Section>
    </>
  );
}
