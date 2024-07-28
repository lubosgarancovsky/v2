import React from 'react';
import { motion } from 'framer-motion';

interface FloatingThumbnailProps {
  children: React.ReactNode;
  src: string;
  width: number;
  height: number;
  alt: string;
}

const FloatingThumbnail: React.FC<FloatingThumbnailProps> = ({
  children,
  ...props
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const wrapperRef = React.useRef<HTMLDivElement>(null);

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={(e) => {
        const wrapper = wrapperRef.current;

        if (wrapper) {
          const client = wrapper.getBoundingClientRect();
          setPosition({
            x: e.clientX - client.left,
            y: e.clientY - client.top
          });
        }
      }}
      className="relative duration-300"
    >
      {children}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: position.y, x: position.x }}
          animate={{
            opacity: 1,
            y: `calc(${position.y}px - 110% )`,
            x: `calc(${position.x}px - 50%)`
          }}
          transition={{ duration: 0, ease: 'easeIn', delay: 0 }}
          className="absolute top-0 left-0 z-50 rounded-md w-80 overflow-hidden hidden tb2:block"
        >
          <img {...props} />
        </motion.div>
      )}
    </div>
  );
};

export default FloatingThumbnail;
