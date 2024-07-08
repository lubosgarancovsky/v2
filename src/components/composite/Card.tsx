import React, { AnchorHTMLAttributes } from 'react';
import { cn } from '../../utils';

interface CardProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'title'> {
  title: string;
  description: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  children,
  className,
  ...props
}) => {
  return (
    <a className={cn('flex flex-col gap-6', className)} {...props}>
      <div className="bg-background-100 rounded-md overflow-hidden">
        {children}
      </div>
      <div className="flex flex-col gap-1.5">
        <span>{title}</span>
        <span className="text-foreground-100">{description}</span>
      </div>
    </a>
  );
};

export default Card;
