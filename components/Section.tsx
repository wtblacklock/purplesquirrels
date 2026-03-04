import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  title?: string;
  children?: ReactNode;
  className?: string;
}

export function Section({ label, title, children, className, ...props }: SectionProps) {
  return (
    <section className={cn("py-20 md:py-32 border-t border-white/5", className)} {...props}>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-3">
            {label && (
              <span className="text-xs font-mono uppercase tracking-wider text-[#8A8F98]">
                {label}
              </span>
            )}
          </div>
          <div className="md:col-span-9">
            {title && (
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-[#E4E5E7] mb-8">
                {title}
              </h2>
            )}
            <div className="text-[#B4B8C0] leading-relaxed space-y-6">
              {children}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
