'use client';

import { ReactNode, MouseEventHandler } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

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
    primary: 'bg-foreground text-background',
    secondary: 'border border-border text-foreground',
    ghost: 'text-foreground',
  };

  const sizes = {
    sm: 'h-8 px-3 text-xs',
    md: 'h-10 px-5 text-sm',
    lg: 'h-12 px-7 text-base',
  };

  const iconSizes = {
    sm: 12,
    md: 14,
    lg: 16,
  };

  const classes = cn(
    'inline-flex items-center justify-center rounded-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-40 disabled:pointer-events-none whitespace-nowrap group',
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <span className="flex items-center gap-2">
      <span className="whitespace-nowrap">{children}</span>
      <ArrowRight
        size={iconSizes[size]}
        className="w-0 opacity-0 group-hover:w-auto group-hover:opacity-100 transition-all duration-300 ease-out"
      />
    </span>
  );

  const buttonElement = (
    <motion.div
      initial={{ clipPath: 'inset(0 100% 0 0)' }}
      animate={{ clipPath: 'inset(0 0% 0 0)' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
    >
      <span className={classes}>{content}</span>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {buttonElement}
      </Link>
    );
  }

  return buttonElement;
}
