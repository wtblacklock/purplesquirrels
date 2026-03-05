import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  label?: string;
  title?: string;
  children?: ReactNode;
  className?: string;
}

export function Section({ label, title, children, className, ...props }: SectionProps) {
  return (
    <section
      className={cn('py-24 md:py-32 border-t border-border', className)}
      {...props}
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-3">
            {label && (
              <span className="text-xs font-sans font-medium uppercase tracking-widest text-muted">
                {label}
              </span>
            )}
          </div>
          <div className="md:col-span-9">
            {title && (
              <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-8 leading-tight">
                {title}
              </h2>
            )}
            <div className="text-muted leading-relaxed space-y-5 text-base md:text-lg">
              {children}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
