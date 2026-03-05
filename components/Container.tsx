import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div
      className={cn('mx-auto max-w-[1280px] px-6 md:px-10', className)}
      {...props}
    >
      {children}
    </div>
  );
}
