import React, { AnchorHTMLAttributes } from 'react';
import { cn } from '../../utils';
import { ArrowUpRight } from '../icons';

interface LinkBadgeProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

const LinkBadge: React.FC<LinkBadgeProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <a
      {...props}
      className={cn(
        'text-sm py-1.5 px-3 bg-background-100 rounded-full border border-background-200 hover:bg-background-200 flex gap-1',
        className
      )}
    >
      {children}

      <ArrowUpRight className="flex-shrink-0 w-5 text-foreground-200" />
    </a>
  );
};

export default LinkBadge;
