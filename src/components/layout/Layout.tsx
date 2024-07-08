import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col max-w-4xl mx-auto">
      <main className="flex flex-col gap-24 flex-1 py-24 px-5">{children}</main>
    </div>
  );
};

export default Layout;
