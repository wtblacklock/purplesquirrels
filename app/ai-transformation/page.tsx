import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';

export const metadata: Metadata = {
  title: 'AI Transformation',
  description: 'From AI-absent to AI-native. Strategy, process redesign, people training, and implementation roadmap — all three, or none of it sticks.',
};

export default function AITransformation() {
  return (
    <>
      <div className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-white/5">
        <Container>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
            AI Transformation
          </h1>
          <p className="text-xl text-[#B4B8C0] max-w-2xl leading-relaxed">
            From AI-absent to AI-native. People, processes, and products — all three, or none of it sticks.
          </p>
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
