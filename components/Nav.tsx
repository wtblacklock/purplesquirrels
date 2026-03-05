'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'AI Engineering', href: '/ai-engineering' },
  { label: 'AI Transformation', href: '/ai-transformation' },
  { label: 'About', href: '/about' },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-display font-bold text-sm uppercase tracking-widest text-foreground hover:text-accent transition-colors"
        >
          Purple Squirrel
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors',
                pathname.startsWith(link.href)
                  ? 'text-foreground'
                  : 'text-muted hover:text-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="text-sm font-medium text-background bg-foreground px-4 py-2 rounded-md hover:bg-accent transition-colors"
          >
            Start a Conversation
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-8 space-y-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                'block text-base font-medium transition-colors',
                pathname.startsWith(link.href) ? 'text-foreground' : 'text-muted'
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-border">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-block text-sm font-medium text-background bg-foreground px-5 py-2.5 rounded-md hover:bg-accent transition-colors"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
