import React from 'react';
import { ProjectCard } from '../../composite';
import { IDSK3Logo } from '../../icons';

import PapThumbnail from '../../../assets/images/pap/pap-thumbnail.webp';
import KsdrThumbnail from '../../../assets/images/ksdr/ksdr-thumbnail.webp';

const PinnedProjects: React.FC = () => {
  return (
    <div className="flex flex-col gap-12">
      <ProjectCard
        href="/v2/ksdr"
        title="KSDR"
        description="Platform for viewing and sharing official documents"
        image={KsdrThumbnail}
      />

      <ProjectCard
        href="/v2/moje-slovensko"
        title="Moje Slovensko"
        description="Mailbox simplifying communication between citizens and public authorities"
        image={PapThumbnail}
      />

      <ProjectCard
        href="/v2/idsk3"
        title={'ID-SK 3'}
        description={'React UI library'}
        className="w-full"
      >
        <div className="bg-black flex p-8 justify-center items-center rounded-2xl">
          <IDSK3Logo />
        </div>
      </ProjectCard>
    </div>
  );
};

export default PinnedProjects;
