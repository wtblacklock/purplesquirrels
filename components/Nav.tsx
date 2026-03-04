'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from './Container';
import { Button } from './Button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Close dropdown when pathname changes
  useEffect(() => {
    setActiveDropdown(null);
    setIsOpen(false);
  }, [pathname]);

  const engineeringItems = [
    { title: 'Application Development', href: '/ai-engineering#infrastructure' },
    { title: 'From SDLC to AI DLC', href: '/ai-engineering#evaluation' },
    { title: 'Code Migration + Refactors', href: '/ai-engineering' },
    { title: 'Data Engineering + Analysis', href: '/ai-engineering' },
    { title: 'Custom Agentic Solutions', href: '/ai-engineering#data' },
  ];

  const transformationItems = [
    { title: 'AI Strategy', href: '/ai-transformation#strategy' },
    { title: 'Product Transformation', href: '/ai-transformation' },
    { title: 'Process Transformation', href: '/ai-transformation' },
    { title: 'People & Training', href: '/ai-transformation#culture' },
    { title: 'AI Tooling', href: '/ai-transformation' },
    { title: 'Implementation Roadmap', href: '/ai-transformation#governance' },
  ];

  const isActive = (path: string) => pathname.startsWith(path);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#08090A]/80 backdrop-blur-md border-b border-white/5">
      <Container className="flex items-center justify-between h-16 relative">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-[#E4E5E7] hover:text-white transition-colors z-50"
        >
          Purple Squirrel
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 h-full">
          <div className="flex items-center gap-1 h-full">

            {/* AI Engineering Dropdown Trigger */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => handleMouseEnter('engineering')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/ai-engineering"
                className={cn(
                  "flex items-center gap-1.5 px-3 py-2 text-sm transition-colors duration-200 rounded-md",
                  isActive('/ai-engineering') || activeDropdown === 'engineering'
                    ? "text-[#E4E5E7] bg-white/5"
                    : "text-[#8A8F98] hover:text-[#E4E5E7] hover:bg-white/5"
                )}
              >
                AI Engineering
                <ChevronDown size={14} className={cn("transition-transform duration-200", activeDropdown === 'engineering' ? "rotate-180" : "")} />
              </Link>

              {/* Floating Dropdown */}
              <div
                className={cn(
                  "absolute top-full left-0 w-56 pt-2 transition-all duration-200 origin-top-left",
                  activeDropdown === 'engineering'
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 -translate-y-2 invisible pointer-events-none"
                )}
              >
                <div className="bg-[#08090A] border border-white/10 rounded-lg p-2 shadow-2xl shadow-black/50 backdrop-blur-xl">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-mono uppercase text-[#5F636E] px-3 py-2">Sections</span>
                    {engineeringItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block px-3 py-2 text-sm text-[#8A8F98] hover:text-[#E4E5E7] hover:bg-white/5 rounded-md transition-colors"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* AI Transformation Dropdown Trigger */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => handleMouseEnter('transformation')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/ai-transformation"
                className={cn(
                  "flex items-center gap-1.5 px-3 py-2 text-sm transition-colors duration-200 rounded-md",
                  isActive('/ai-transformation') || activeDropdown === 'transformation'
                    ? "text-[#E4E5E7] bg-white/5"
                    : "text-[#8A8F98] hover:text-[#E4E5E7] hover:bg-white/5"
                )}
              >
                AI Transformation
                <ChevronDown size={14} className={cn("transition-transform duration-200", activeDropdown === 'transformation' ? "rotate-180" : "")} />
              </Link>

              {/* Floating Dropdown */}
              <div
                className={cn(
                  "absolute top-full left-0 w-56 pt-2 transition-all duration-200 origin-top-left",
                  activeDropdown === 'transformation'
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 -translate-y-2 invisible pointer-events-none"
                )}
              >
                <div className="bg-[#08090A] border border-white/10 rounded-lg p-2 shadow-2xl shadow-black/50 backdrop-blur-xl">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-mono uppercase text-[#5F636E] px-3 py-2">Sections</span>
                    {transformationItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block px-3 py-2 text-sm text-[#8A8F98] hover:text-[#E4E5E7] hover:bg-white/5 rounded-md transition-colors"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              onMouseEnter={() => handleMouseEnter('none')}
              className={cn(
                "px-3 py-2 text-sm transition-colors duration-200 rounded-md",
                isActive('/about')
                  ? "text-[#E4E5E7]"
                  : "text-[#8A8F98] hover:text-[#E4E5E7] hover:bg-white/5"
              )}
            >
              About
            </Link>
          </div>

          <div className="h-4 w-px bg-white/10" />
          <Button href="/contact" size="sm" variant="secondary">
            Start a Conversation
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#E4E5E7]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[#08090A] border-b border-white/5 p-6 space-y-6 animate-in slide-in-from-top-2 h-[calc(100vh-64px)] overflow-y-auto">

          {/* Engineering Mobile Section */}
          <div className="space-y-3">
            <Link
              href="/ai-engineering"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-[#E4E5E7] block mb-2"
            >
              AI Engineering
            </Link>
            <div className="pl-4 space-y-3 border-l border-white/10">
              {engineeringItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm text-[#8A8F98] hover:text-[#E4E5E7]"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Transformation Mobile Section */}
          <div className="space-y-3">
            <Link
              href="/ai-transformation"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-[#E4E5E7] block mb-2"
            >
              AI Transformation
            </Link>
            <div className="pl-4 space-y-3 border-l border-white/10">
              {transformationItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm text-[#8A8F98] hover:text-[#E4E5E7]"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="block text-base font-medium text-[#E4E5E7]"
          >
            About
          </Link>

          <div className="pt-4 border-t border-white/5">
            <Button href="/contact" className="w-full" onClick={() => setIsOpen(false)}>
              Start a Conversation
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
