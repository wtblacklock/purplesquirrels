import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { FadeIn } from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'AI Engineering',
  description: 'Elite squads who use AI to build AI. Application development, agentic systems, code migration, and data engineering — shipped to production.',
};

export default function AIEngineering() {
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
              AI Engineering
            </h1>
            <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-2xl">
              Elite squads who use AI to build AI. You pay for features in production, not hours in Zoom.
            </p>
          </FadeIn>
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
