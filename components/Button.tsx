'use client';

import { ReactNode, MouseEventHandler } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  children?: ReactNode;
  onClick?: MouseEventHandler<any>;
  type?: 'button' | 'submit' | 'reset';
  [key: string]: any;
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  href,
  children,
  ...props
}: ButtonProps) {
  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  const paddingSizes = {
    sm: 'py-2 px-3',
    md: 'py-2.5 px-5',
    lg: 'py-3 px-7',
  };

  const baseClasses = cn(
    'inline-flex items-center justify-center rounded-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-40 disabled:pointer-events-none whitespace-nowrap',
    textSizes[size]
  );

  if (variant === 'primary') {
    const buttonClasses = cn(
      baseClasses,
      'bg-foreground hover:bg-background text-background relative group border-2 border-foreground overflow-hidden transition-colors duration-200',
      className
    );

    const spanClasses = cn(
      'flex items-center justify-center w-full',
      paddingSizes[size]
    );

    const content = (
      <>
        <span className={cn(spanClasses, "transition-transform duration-200 ease-out group-hover:-translate-y-full text-background")}>
          {children}
        </span>
        <span className={cn(spanClasses, "absolute inset-0 translate-y-full transition-transform duration-200 ease-out group-hover:translate-y-0 text-foreground")}>
          {children}
        </span>
      </>
    );

    if (href) {
      return (
        <Link href={href} className={buttonClasses} {...props}>
          {content}
        </Link>
      );
    }
    return (
      <button type={props.type || 'button'} className={buttonClasses} {...props}>
        {content}
      </button>
    );
  }

  const secondaryClasses = cn(
    baseClasses,
    paddingSizes[size],
    'border border-border text-foreground hover:bg-foreground hover:text-background hover:border-foreground transition-colors duration-200',
    className
  );

  if (href) {
    return (
      <Link href={href} className={secondaryClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={props.type || 'button'} className={secondaryClasses} {...props}>
      {children}
    </button>
  );
}
