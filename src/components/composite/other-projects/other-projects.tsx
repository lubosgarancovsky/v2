import React from 'react';
import { projects } from '../../../utils';
import Project from './project';

const OtherProjects: React.FC = () => {
  return (
    <div>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <Project item={project} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OtherProjects;
