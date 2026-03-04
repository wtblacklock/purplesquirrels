import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'For general inquiries, partnerships, or anything else. We respond within 1 business day.',
};

export default function Contact() {
  return (
    <div className="pt-24 pb-20 md:pt-32 md:pb-32">
      <Container>
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
            Start a Conversation
          </h1>
          <p className="text-xl text-[#B4B8C0] mb-12 leading-relaxed">
            For general inquiries, partnerships, or anything else. We respond within 1 business day.
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-[#E4E5E7]">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-[#E4E5E7] focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-[#E4E5E7]">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-[#E4E5E7] focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                  placeholder="jane@company.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-[#E4E5E7]">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-[#E4E5E7] focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <div className="pt-4">
              <Button type="submit" size="lg" className="w-full md:w-auto">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}
