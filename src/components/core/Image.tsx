import React, { ImgHTMLAttributes, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Close } from '../icons';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

const Image: React.FC<ImageProps> = ({ ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full overflow-y-auto bg-black/50 backdrop-blur flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="max-w-[120rem] mx-auto p-5 flex flex-col"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="hover:bg-white/20 p-1.5 rounded-full mb-4 ml-auto"
                onClick={() => setIsOpen(false)}
              >
                <Close className="w-5" />
              </button>
              <img {...props} loading="lazy" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <button onClick={() => setIsOpen(true)}>
        <img {...props} loading="lazy" />
      </button>
    </>
  );
};

export default Image;
