import React, { BaseHTMLAttributes } from 'react';
import { cn } from '../../utils';

interface BadgeProps extends BaseHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        'text-sm py-1.5 px-3 bg-background-100 rounded-full border border-background-200 flex gap-1 w-fit',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Badge;
