import { useState } from 'react';
import { ArrowUpRight } from '../../icons';
import { motion } from 'framer-motion';

interface ProjectProps {
  item: any;
}

const Project: React.FC<ProjectProps> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <a
      href={item.link}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative duration-300 p-4 border-t border-background-100 last:border-b flex gap-4 overflow-hidden"
    >
      <motion.div
        className="w-full h-full absolute top-0 left-0 bg-background-100/50 z-[-1]"
        animate={{ y: isHovered ? 0 : '100%' }}
        transition={{ ease: 'easeInOut', duration: 0.3 }}
      ></motion.div>

      <span className="text-nowrap w-32">{item.title}</span>
      <span className="text-foreground-100 hidden tb2:inline text-nowrap">
        {item.description}
      </span>
      <motion.span
        className="ml-auto"
        animate={{ rotate: isHovered ? 0 : 45, opacity: isHovered ? 1 : 0.5 }}
        transition={{ ease: 'easeInOut', duration: 0.2 }}
      >
        <ArrowUpRight width="1.5em" />
      </motion.span>
    </a>
  );
};

export default Project;
