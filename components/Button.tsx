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
  const variants = {
    primary: 'bg-foreground text-background hover:bg-accent transition-colors',
    secondary: 'border border-border text-foreground hover:border-foreground/30 transition-colors',
    ghost: 'text-muted hover:text-foreground transition-colors',
  };

  const sizes = {
    sm: 'h-8 px-3 text-xs',
    md: 'h-10 px-5 text-sm',
    lg: 'h-12 px-7 text-base',
  };

  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-md font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:opacity-40 disabled:pointer-events-none',
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
