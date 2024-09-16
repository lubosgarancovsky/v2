import React, { AnchorHTMLAttributes, useMemo } from 'react';
import { Arrow } from '../icons';
import { motion } from 'framer-motion';
import { cn } from '../../utils';

const leftVariantLeft = {
  initial: {
    x: '0%'
  },
  hover: {
    x: '-150%'
  }
};

const leftVariantRight = {
  initial: {
    x: '150%'
  },
  hover: {
    x: '0%'
  }
};

const rightVariantLeft = {
  initial: {
    x: '0%'
  },
  hover: {
    x: '150%'
  }
};

const rightVariantRight = {
  initial: {
    x: '-150%'
  },
  hover: {
    x: '0%'
  }
};

interface ArrowLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  arrowPosition?: 'left' | 'right';
}

const ArrowLink: React.FC<ArrowLinkProps> = ({
  children,
  arrowPosition = 'left',
  ...props
}) => {
  const style = useMemo(
    () => cn('w-6', { 'rotate-180': arrowPosition === 'right' }),
    [arrowPosition]
  );

  return (
    <motion.a
      initial="initial"
      whileHover="hover"
      className="arrow-link flex gap-3 items-center w-fit"
      {...props}
    >
      {arrowPosition === 'right' && <span>{children}</span>}

      <div className="p-1.5 bg-background-200 text-foreground-100 rounded-full relative overflow-hidden flex">
        <motion.div
          variants={
            arrowPosition === 'left' ? leftVariantLeft : rightVariantLeft
          }
          transition={{
            ease: 'easeInOut'
          }}
        >
          <Arrow className={style} />
        </motion.div>

        <motion.div
          variants={
            arrowPosition === 'left' ? leftVariantRight : rightVariantRight
          }
          transition={{
            ease: 'easeInOut'
          }}
          className="absolute -translate-x-full"
        >
          <Arrow className={style} />
        </motion.div>
      </div>
      {arrowPosition === 'left' && <span>{children}</span>}
    </motion.a>
  );
};

export default ArrowLink;
