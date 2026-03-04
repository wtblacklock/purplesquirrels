import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';

export const metadata: Metadata = {
  title: 'AI Engineering',
  description: 'Elite squads who use AI to build AI. Application development, agentic systems, code migration, and data engineering — shipped to production.',
};

export default function AIEngineering() {
  return (
    <>
      <div className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-white/5">
        <Container>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
            AI Engineering
          </h1>
          <p className="text-xl text-[#B4B8C0] max-w-2xl leading-relaxed">
            Elite squads who use AI to build AI. You pay for features in production, not hours in Zoom.
          </p>
        </Container>
      </div>

      <Section id="infrastructure" label="Fullstack" title="Application Development">
        <p>
          We build AI-native applications end-to-end. Frontend, backend, APIs, and integrations — designed from the ground up to leverage AI, not bolt it on.
        </p>
        <p>
          From greenfield builds to adding AI layers to existing products, we ship full-stack solutions with short feedback loops and zero hand-holding.
        </p>
      </Section>

      <Section id="evaluation" label="Methodology" title="From SDLC to AI DLC">
        <p>
          Traditional software development lifecycles don't fit AI systems. We apply an AI-native development lifecycle: experiment, evaluate, iterate, deploy — with proper evals and observability at every stage.
        </p>
        <p>
          This is how you stop guessing and start knowing whether your AI is actually working.
        </p>
      </Section>

      <Section id="data" label="Agentic" title="Custom Agentic Solutions">
        <p>
          Agents that don't just answer questions — they take actions. We design and build multi-agent systems that automate complex workflows across your tooling and data.
        </p>
      </Section>
    </>
  );
}
