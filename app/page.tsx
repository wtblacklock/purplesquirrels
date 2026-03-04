import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'TwinB | AI Engineering & Transformation',
  description: 'The businesses that win the next decade will be AI-native. We build the engineering and transformation systems that get you there.',
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="relative pt-24 pb-20 md:pt-32 md:pb-32 border-b border-white/5">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono text-[#8A8F98]">SYSTEMS ONLINE</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-8 leading-[1.1]">
              Build AI-native. Win the next decade.
            </h1>

            <p className="text-xl text-[#B4B8C0] mb-10 max-w-xl leading-relaxed">
              The businesses that win the next decade will be AI-native. We build the engineering and transformation systems that get you there.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button href="/contact" size="lg">
                Start a Conversation
              </Button>
              <Button href="/ai-engineering" variant="secondary" size="lg">
                Explore Engineering
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Sections */}
      <Section label="01 — Approach" title="You're not behind. You're at the starting line.">
        <p>
          Every business is now being asked to compete on intelligence. The ones that move with depth — not just speed — will win.
        </p>
        <p>
          We help companies build AI into their core: products, processes, and people. Not as a feature. As a foundation.
        </p>
      </Section>

      <Section label="02 — Practice" title="Two practices. One outcome.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <div className="p-6 rounded-lg bg-white/[0.02] border border-white/5">
            <h3 className="text-lg font-medium text-white mb-3">AI Engineering</h3>
            <p className="text-sm text-[#8A8F98]">
              Elite squads who use AI to build AI. Application development, agentic systems, code migration, and data engineering — shipped to production.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-white/[0.02] border border-white/5">
            <h3 className="text-lg font-medium text-white mb-3">AI Transformation</h3>
            <p className="text-sm text-[#8A8F98]">
              From AI-absent to AI-native. Strategy, process redesign, people training, and implementation roadmap — all three or none of it sticks.
            </p>
          </div>
        </div>
      </Section>

      <Section label="03 — Philosophy" title="AI is a platform shift, not a feature.">
        <p>
          Companies in three positions: AI-absent (losing ground), AI-integrated (catching up), AI-native (compounding advantage). There is no safe middle. Standing still is falling behind.
        </p>
        <p>
          We exist to move companies from wherever they are to where they need to be.
        </p>
      </Section>
    </>
  );
}
