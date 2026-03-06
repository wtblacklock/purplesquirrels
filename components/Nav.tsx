'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'AI Engineering', href: '/ai-engineering' },
  { label: 'AI Transformation', href: '/ai-transformation' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const services = [
  { label: 'AI Engineering', href: '/ai-engineering' },
  { label: 'AI Transformation', href: '/ai-transformation' },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* ── Top bar: logo only — anchored at top, does not follow scroll ── */}
      <header className="absolute top-0 left-0 right-0 z-40 h-18 md:h-24 flex items-center pointer-events-none">
        <div className="mx-auto max-w-[1440px] w-full px-4 md:px-8">
          <Link
            href="/"
            className="pointer-events-auto font-display text-xs uppercase tracking-widest text-muted hover:text-foreground transition-colors"
          >
            purple squirrels
          </Link>
        </div>
      </header>

      {/* ── Bottom-center floating pill ── */}
      <div
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-x-1 rounded-xl border border-border px-2 py-2 shadow-xl backdrop-blur-md"
        style={{ background: 'var(--fg)', color: 'var(--bg)' }}
      >
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="size-9 flex items-center justify-center hover:opacity-70 transition-opacity"
          style={{ color: 'var(--bg)' }}
        >
          <Menu size={16} />
        </button>
        <ThemeToggle />
      </div>

      {/* ── Full-screen overlay (content contained to site width) ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-50 flex flex-col"
            style={{ background: 'var(--bg)' }}
          >
            {/* Overlay top bar — constrained to site width */}
            <div className="shrink-0 border-b border-border">
              <div className="mx-auto max-w-[1440px] w-full px-4 md:px-8 h-18 md:h-24 flex items-center justify-between">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="font-display text-xs uppercase tracking-widest text-foreground"
                >
                  purple squirrels
                </Link>
                <button
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
                >
                  Close
                  <kbd className="rounded border border-border px-1.5 py-0.5 text-xs font-mono leading-none">
                    ESC
                  </kbd>
                </button>
              </div>
            </div>

            {/* Overlay body — constrained to site width */}
            <div className="flex flex-1 overflow-hidden mx-auto max-w-[1440px] w-full">

              {/* Left: large nav links */}
              <div className="flex flex-col justify-center px-4 md:px-8 py-8 flex-1 overflow-y-auto">
                {navItems.map((item, i) => (
                  <div key={item.href}>
                    {i > 0 && <div className="h-px bg-border" />}
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 + i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block py-4 md:py-5 font-display uppercase text-foreground hover:text-muted transition-colors leading-none"
                        style={{ fontSize: 'clamp(2.5rem, 6vw, 7rem)' }}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* Right: services + contact (desktop only) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.4 }}
                className="hidden md:flex flex-col justify-center px-10 lg:px-16 py-8 w-[360px] lg:w-[420px] shrink-0 border-l border-border gap-y-10"
              >
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-muted mb-5">
                    Our Services
                  </p>
                  <div className="flex flex-col gap-y-2.5">
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setOpen(false)}
                        className="link-underline text-sm text-foreground"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-muted mb-5">
                    Contact
                  </p>
                  <div className="flex flex-col gap-y-3">
                    <div className="flex items-baseline gap-3 text-sm">
                      <span className="text-muted w-24 shrink-0">General</span>
                      <a href="mailto:hello@purplesquirrel.ai" className="link-underline text-foreground">
                        hello@purplesquirrel.ai ↗
                      </a>
                    </div>
                    <div className="flex items-baseline gap-3 text-sm">
                      <span className="text-muted w-24 shrink-0">LinkedIn</span>
                      <a href="#" className="link-underline text-foreground">purple squirrels ↗</a>
                    </div>
                    <div className="flex items-baseline gap-3 text-sm">
                      <span className="text-muted w-24 shrink-0">Twitter / X</span>
                      <a href="#" className="link-underline text-foreground">@purplesquirrel ↗</a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
