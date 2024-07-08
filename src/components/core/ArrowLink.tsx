import React, { AnchorHTMLAttributes } from 'react';
import { Arrow } from '../icons';

interface ArrowLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  arrowPosition?: 'left' | 'right';
}

const ArrowLink: React.FC<ArrowLinkProps> = ({
  children,
  arrowPosition = 'left',
  ...props
}) => {
  return (
    <a className="flex gap-3 items-center duration-300 hover:gap-4" {...props}>
      {arrowPosition === 'left' && <Arrow />}
      {children}
      {arrowPosition === 'right' && <Arrow className="rotate-180" />}
    </a>
  );
};

export default ArrowLink;
