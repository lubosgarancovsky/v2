import React from 'react';

interface BlockItemProps {
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const BlockItem: React.FC<BlockItemProps> = ({ icon, children }) => {
  const IconElement = () =>
    icon && React.isValidElement(icon)
      ? React.cloneElement(icon, { className: 'w-6' })
      : null;

  return (
    <div className="bg-background-100  rounded border border-background-200 h-fit flex items-center gap-4 w-full p-4">
      <IconElement />
      {children}
    </div>
  );
};

export default BlockItem;
