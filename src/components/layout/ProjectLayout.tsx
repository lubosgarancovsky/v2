import React from 'react';
import { ArrowLink, Badge, LinkBadge } from '../core';

type FooterLink = {
  title: string;
  href: string;
};

interface ProjectLayoutProps {
  title: string;
  description: string;
  thumbnail: string | React.ReactNode;
  prev: FooterLink;
  next: FooterLink;
  technologies?: string[];
  children?: React.ReactNode;
  href?: string;
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({
  thumbnail,
  title,
  description,
  prev,
  next,
  children,
  href,
  technologies = []
}) => {
  return (
    <div className="mt-8">
      <div className="flex flex-col gap-8">
        <ArrowLink href="/v2/">Back</ArrowLink>
        {typeof thumbnail === 'string' ? (
          <img className="rounded-xl" src={thumbnail} alt={title} />
        ) : (
          thumbnail
        )}
      </div>

      <div className="flex flex-col gap-16 my-12">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2>{title}</h2>
            {!!href && (
              <LinkBadge href={href} target="_blank">
                Visit
              </LinkBadge>
            )}
          </div>

          <p className="text-foreground-100 max-w-2xl">{description}</p>
          {!!technologies.length && (
            <div className="flex gap-3 flex-wrap mt-4">
              {technologies.map((tech, index) => (
                <Badge key={index}>{tech}</Badge>
              ))}
            </div>
          )}
        </div>

        <hr className="border-foreground-200/50" />
        {children}
      </div>

      <div className="flex justify-between items-center">
        <ArrowLink href={`/v2${prev.href}`}>{prev.title}</ArrowLink>
        <ArrowLink href={`/v2${next.href}`} arrowPosition="right">
          {next.title}
        </ArrowLink>
      </div>
    </div>
  );
};

export default ProjectLayout;
