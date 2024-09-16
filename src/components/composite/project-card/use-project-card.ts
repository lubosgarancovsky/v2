import { useMotionValue, useSpring } from 'framer-motion';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { cn } from '../../../utils';

export interface UseProjectCardProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  description: string;
  image?: string;
}

const cursorSpringOptions = {
  stiffness: 30,
  damping: 5,
  mass: 0.1
};

function useProjectCard(props: UseProjectCardProps) {
  const { title, description, image, children, className, ...anchorProps } =
    props;

  const [isHovered, setIsHovered] = useState<boolean>(false);
  const container = useRef<HTMLAnchorElement>(null);

  const position = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  };

  const spring = {
    x: useSpring(position.x, cursorSpringOptions),
    y: useSpring(position.y, cursorSpringOptions)
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (container.current) {
      const { clientX, clientY } = e;
      const { left, top } = container.current.getBoundingClientRect();
      position.x.set(clientX - left - 64);
      position.y.set(clientY - top - 64);
    }
  };

  const style = useMemo(() => {
    return cn(
      'card flex flex-col gap-6 rounded-xl overflow-hidden relative',
      className
    );
  }, [className]);

  const getAnchorProps = useCallback(
    (props = {}) => ({
      ref: container,
      'aria-label': `Open project detail for ${title}`,
      ...props,
      ...anchorProps
    }),
    [title, anchorProps]
  );

  return {
    title,
    description,
    image,
    children,
    spring,
    isHovered,
    style,
    handleMouseEnter,
    handleMouseLeave,
    handleMouseMove,
    getAnchorProps
  };
}

export default useProjectCard;
