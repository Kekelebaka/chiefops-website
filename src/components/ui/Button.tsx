import Link from 'next/link';
import { forwardRef, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  href?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      href,
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses = `
      inline-flex items-center justify-center font-medium rounded-lg
      transition-all duration-200 ease-in-out
      focus:outline-none focus:ring-2 focus:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
    `;

    const variants = {
      primary: `
        bg-primary-orange text-white
        hover:bg-orange-600
        focus:ring-primary-orange
        active:bg-orange-700
      `,
      secondary: `
        bg-primary-navy text-white
        hover:bg-navy-800
        focus:ring-primary-navy
        active:bg-navy-900
      `,
      outline: `
        border-2 border-primary-orange text-primary-orange
        hover:bg-primary-orange hover:text-white
        focus:ring-primary-orange
        active:bg-orange-600
      `,
      ghost: `
        text-primary-navy hover:bg-gray-100
        focus:ring-primary-navy
      `,
      danger: `
        bg-red-500 text-white
        hover:bg-red-600
        focus:ring-red-500
        active:bg-red-700
      `,
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm gap-1.5',
      md: 'px-6 py-2.5 text-base gap-2',
      lg: 'px-8 py-3 text-lg gap-2.5',
      xl: 'px-10 py-4 text-xl gap-3',
    };

    const widthClasses = fullWidth ? 'w-full' : '';

    const combinedClasses = `
      ${baseClasses}
      ${variants[variant]}
      ${sizes[size]}
      ${widthClasses}
      ${className || ''}
    `;

    // If href is provided, render as Link
    if (href) {
      return (
        <Link href={href} className={combinedClasses}>
          {children}
        </Link>
      );
    }

    // Render as button
    return (
      <button ref={ref} className={combinedClasses} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
