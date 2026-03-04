import React from 'react';
import Link from 'next/link';
import { Container } from './Container';

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-16 md:py-24 bg-[#08090A]">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          <div className="col-span-2 md:col-span-1">
            <span className="text-sm font-medium text-[#E4E5E7]">Purple Squirrel</span>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-mono uppercase text-[#8A8F98]">Practice</h3>
            <Link href="/ai-engineering" className="text-sm text-[#8A8F98] hover:text-[#E4E5E7] transition-colors">AI Engineering</Link>
            <Link href="/ai-transformation" className="text-sm text-[#8A8F98] hover:text-[#E4E5E7] transition-colors">AI Transformation</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-mono uppercase text-[#8A8F98]">Company</h3>
            <Link href="/about" className="text-sm text-[#8A8F98] hover:text-[#E4E5E7] transition-colors">About</Link>
            <Link href="/contact" className="text-sm text-[#8A8F98] hover:text-[#E4E5E7] transition-colors">Contact</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-mono uppercase text-[#8A8F98]">Connect</h3>
            <a href="#" className="text-sm text-[#8A8F98] hover:text-[#E4E5E7] transition-colors">LinkedIn</a>
            <a href="#" className="text-sm text-[#8A8F98] hover:text-[#E4E5E7] transition-colors">Twitter / X</a>
            <a href="mailto:hello@twinb.me" className="text-sm text-[#8A8F98] hover:text-[#E4E5E7] transition-colors">hello@twinb.me</a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-[#5F636E]">
            © {new Date().getFullYear()} TwinB Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-[#5F636E]">Privacy Policy</span>
            <span className="text-xs text-[#5F636E]">Terms of Service</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
