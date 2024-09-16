import React from 'react';
import useProjectCard, { UseProjectCardProps } from './use-project-card';
import { motion } from 'framer-motion';

const ProjectCard: React.FC<UseProjectCardProps> = (props) => {
  const {
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
  } = useProjectCard(props);

  const { x, y } = spring;

  return (
    <a
      className={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      {...getAnchorProps()}
    >
      <motion.div
        animate={{ scale: isHovered ? 1 : 0 }}
        className="absolute text-xl w-32 h-32  bg-white/20 backdrop-blur top-0 left-0 z-10 rounded-full grid place-items-center pointer-events-none"
        style={{
          left: x,
          top: y
        }}
      >
        Explore
      </motion.div>
      <div className="overflow-hidden relative">
        {image && (
          <img
            className="card-thumbnail w-full rounded-xl"
            src={image}
            alt={title}
            width={990}
            height={680}
            loading="lazy"
          />
        )}

        {children && <div className="card-thumbnail">{children}</div>}

        <div className="hidden tb2:flex absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/0 to-black/80 p-8 items-end">
          <div className="flex flex-col gap-1.5">
            <h3>{title}</h3>
            <span className="text-foreground-100 max-w-[32rem]">
              {description}
            </span>
          </div>
        </div>
      </div>
      <div className="tb2:hidden flex flex-col gap-1.5">
        <h3>{title}</h3>
        <span className="text-foreground-100">{description}</span>
      </div>
    </a>
  );
};

export default ProjectCard;
