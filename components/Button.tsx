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
  type?: "button" | "submit" | "reset";
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
    primary: "bg-[#E4E5E7] text-black hover:bg-white border border-transparent font-medium shadow-[0_0_10px_rgba(255,255,255,0.1)]",
    secondary: "bg-white/5 text-[#E4E5E7] border border-white/10 hover:bg-white/10 hover:border-white/20",
    ghost: "text-[#8A8F98] hover:text-[#E4E5E7] hover:bg-white/5",
  };

  const sizes = {
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-6 text-base",
  };

  const classes = cn(
    "inline-flex items-center justify-center rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50 disabled:opacity-50 disabled:pointer-events-none",
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
