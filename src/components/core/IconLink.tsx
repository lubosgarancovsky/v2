import React from 'react';
import { cn } from '../../utils';

interface IconLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: React.ReactElement;
  responsive?: boolean;
}

const IconLink: React.FC<IconLinkProps> = ({
  icon,
  children,
  responsive,
  ...props
}) => {
  return (
    <a
      target="_blank"
      className="icon-link p-2 flex gap-2.5 items-center"
      {...props}
    >
      <span className="icon-link__icon duration-200 bg-blue-500 rounded-md p-1">
        {React.cloneElement(icon, { className: 'w-4' })}
      </span>
      <span
        className={cn('icon-link__label text-foreground/70 duration-200', {
          'hidden tb1:inline-block': responsive
        })}
      >
        {children}
      </span>
    </a>
  );
};

export default IconLink;
