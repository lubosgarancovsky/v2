import React from 'react';
import { motion } from 'framer-motion';
import { Github, Home, LinkedIn } from '../icons';
import { IconLink } from '../core';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <motion.header
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.1
      }}
      className="fixed top-0 z-50 w-full flex justify-center max-w-5xl mx-auto origin-top"
    >
      <div className="p-2 mt-4 bg-background-100/50 border border-background-100 max-w-5xl w-full mx-6 backdrop-blur rounded-xl flex justify-between items-center">
        <IconLink href="/v2" icon={<Home />} target="_self" responsive>
          Ľuboš Garančovský
        </IconLink>
        <div className="flex items-center gap-2 tb2:gap-4">
          <IconLink
            href="https://www.linkedin.com/in/lubos-garancovsky/"
            icon={<LinkedIn />}
            responsive
          >
            LinkedIn
          </IconLink>
          <IconLink
            href="https://github.com/lubosgarancovsky"
            icon={<Github />}
            responsive
          >
            Github
          </IconLink>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
