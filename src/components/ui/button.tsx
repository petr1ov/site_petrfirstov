import * as React from 'react';
import { cn } from '@/lib/utils';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline';
};

export function Button({ className, variant = 'default', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50',
        variant === 'default'
          ? 'bg-accent text-white hover:scale-[1.02] hover:shadow-glow'
          : 'border border-border bg-card text-white hover:border-accent hover:scale-[1.02]',
        className,
      )}
      {...props}
    />
  );
}
