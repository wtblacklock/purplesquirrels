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
    <section className={cn('py-32 md:py-64', className)} {...props}>
      <Container>
        <div className="grid grid-cols-12 gap-x-4 gap-y-8 md:gap-x-8">
          <div className="col-span-12 md:col-span-3">
            {label && (
              <span className="text-xs font-medium uppercase tracking-widest text-muted">
                {label}
              </span>
            )}
          </div>
          <div className="col-span-12 md:col-span-9">
            {title && (
              <h2 className="font-h2 text-foreground mb-8">
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
