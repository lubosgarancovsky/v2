import React from 'react';

interface CardProps {
  icon: React.ReactNode;
  title?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children, icon }) => {
  return (
    <div className="bg-background-100/50 p-6 rounded-xl">
      {!!icon &&
        React.cloneElement(icon as any, {
          className: 'w-8 mb-8 text-blue-500'
        })}
      {title}
      <p className="text-foreground-100 mt-2">{children}</p>
    </div>
  );
};

export default Card;
