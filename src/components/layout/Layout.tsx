import React, { useState } from 'react';
import Header from './Header';
import { useLenis } from '@studio-freight/react-lenis';
import { AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
  headerTrigger?: React.RefObject<HTMLElement>;
}

const Layout: React.FC<LayoutProps> = ({ children, headerTrigger }) => {
  const [showHeader, setShowHeader] = useState<boolean>(
    !headerTrigger?.current
  );

  useLenis(() => {
    const trigger = headerTrigger?.current;
    if (trigger) {
      const { top, height } = trigger.getBoundingClientRect();
      if (top + height < 0) {
        setShowHeader(true);
      } else if (top + height >= 0) {
        setShowHeader(false);
      }
    }
  });

  return (
    <div className="flex flex-col max-w-5xl mx-auto relative">
      <AnimatePresence>{showHeader && <Header />}</AnimatePresence>
      <main className="flex flex-col gap-32 flex-1 py-24 px-5">{children}</main>
    </div>
  );
};

export default Layout;
