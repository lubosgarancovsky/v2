import React from 'react';

interface SectionProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: string;
  subtitle?: string;
}

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  className,
  children,
  ...props
}) => {
  return (
    <section className={className} {...props}>
      {(title || subtitle) && (
        <div className="mb-6">
          {title && <h3>{title}</h3>}
          {subtitle && <p className="mt-2 text-foreground-100">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
};

export default Section;
