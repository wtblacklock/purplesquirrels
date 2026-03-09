'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { label: 'Welcome', href: '/' },
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
  const [isDesktop, setIsDesktop] = useState(false);
  const [desktopCollapsed, setDesktopCollapsed] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    setDesktopMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const syncDesktop = () => {
      const desktop = mediaQuery.matches;
      setIsDesktop(desktop);
      if (!desktop) {
        setDesktopCollapsed(false);
        setDesktopMenuOpen(false);
      }
    };

    syncDesktop();
    mediaQuery.addEventListener('change', syncDesktop);
    return () => mediaQuery.removeEventListener('change', syncDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const onScroll = () => {
      const shouldCollapse = window.scrollY > 24;
      setDesktopCollapsed(shouldCollapse);

      if (!shouldCollapse) {
        setDesktopMenuOpen(false);
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isDesktop]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        setDesktopMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open && !isDesktop ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open, isDesktop]);

  const desktopExpanded = !desktopCollapsed || desktopMenuOpen;

  return (
    <>
      {/* ── Top bar: fixed so controls follow scroll ── */}
      <header className="fixed top-0 left-0 right-0 z-40 h-20 md:h-[106px] flex items-center pointer-events-none">
        <div className="mx-auto max-w-[1440px] w-full px-4 md:px-8 flex items-center justify-between">
          <Link
            href="/"
            className="pointer-events-auto font-display text-xs uppercase tracking-widest text-muted hover:text-foreground transition-colors"
          >
            Purple Squirrels
          </Link>

          {isDesktop && (
            <div className="pointer-events-auto relative flex items-center gap-3">
              <motion.div
                layout
                transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden rounded-xl border border-border px-2 py-2 shadow-xl backdrop-blur-md"
                style={{ background: 'var(--fg)', color: 'var(--bg)' }}
              >
                {desktopExpanded ? (
                  <div className="flex items-center gap-1.5">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setDesktopMenuOpen(false)}
                        className="rounded-md px-3 py-2 text-xs uppercase tracking-wider hover:opacity-70 transition-opacity"
                        style={{ color: 'var(--bg)' }}
                      >
                        {item.label}
                      </Link>
                    ))}
                    <ThemeToggle />
                    {desktopCollapsed && (
                      <button
                        onClick={() => setDesktopMenuOpen(false)}
                        aria-label="Close desktop menu"
                        className="size-10 flex items-center justify-center hover:opacity-70 transition-opacity"
                        style={{ color: 'var(--bg)' }}
                      >
                        <X size={18} />
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5">
                    <Link
                      href="/contact"
                      onClick={() => setDesktopMenuOpen(false)}
                      className="rounded-md px-3 py-2 text-xs uppercase tracking-wider hover:opacity-70 transition-opacity"
                      style={{ color: 'var(--bg)' }}
                    >
                      Contact
                    </Link>
                    <button
                      onClick={() => setDesktopMenuOpen(true)}
                      aria-label="Open desktop menu"
                      className="size-10 flex items-center justify-center hover:opacity-70 transition-opacity"
                      style={{ color: 'var(--bg)' }}
                    >
                      <Menu size={18} />
                    </button>
                    <ThemeToggle />
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </div>
      </header>

      {/* ── Bottom-center floating pill ── */}
      {!isDesktop && (
        <div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-x-1.5 rounded-xl border border-border px-2.5 py-2.5 shadow-xl backdrop-blur-md"
          style={{ background: 'var(--fg)', color: 'var(--bg)' }}
        >
          <Link
            href="/"
            aria-label="Home"
            className="size-10 flex items-center justify-center hover:opacity-70 transition-opacity"
            style={{ color: 'var(--bg)' }}
          >
            <Home size={18} />
          </Link>
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="size-10 flex items-center justify-center hover:opacity-70 transition-opacity"
            style={{ color: 'var(--bg)' }}
          >
            <Menu size={18} />
          </button>
          <ThemeToggle />
        </div>
      )}

      {/* ── Full-screen overlay (content contained to site width) ── */}
      <AnimatePresence>
        {open && !isDesktop && (
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
              <div className="mx-auto max-w-[1440px] w-full px-4 md:px-8 h-20 md:h-[106px] flex items-center justify-between">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="font-display text-xs uppercase tracking-widest text-foreground"
                >
                  Purple Squirrels
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
                      <a href="mailto:hello@purplesquirrels.ai" className="link-underline text-foreground">
                        hello@purplesquirrels.ai ↗
                      </a>
                    </div>
                    <div className="flex items-baseline gap-3 text-sm">
                      <span className="text-muted w-24 shrink-0">LinkedIn</span>
                      <a href="#" className="link-underline text-foreground">Purple Squirrels ↗</a>
                    </div>
                    <div className="flex items-baseline gap-3 text-sm">
                      <span className="text-muted w-24 shrink-0">Twitter / X</span>
                      <a href="#" className="link-underline text-foreground">@purplesquirrels ↗</a>
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
