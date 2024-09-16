import React from 'react';
import {
  Box,
  Card,
  Layout,
  ProjectLayout,
  Section,
  Terrain,
  TreeStructure
} from '../components';

import LifesimThumbnail from '../assets/images/lifesim/lifesim-thumbnail.png';
import Lifesim01 from '../assets/images/lifesim/lifesim-01.png';
import Lifesim02 from '../assets/images/lifesim/lifesim-02.png';
import Lifesim03 from '../assets/images/lifesim/lifesim-03.png';

const LifesimPage: React.FC = () => {
  return (
    <Layout>
      <ProjectLayout
        title="LifeSim"
        description="Simulation of a simple ecosystem written in Typescript utilizing the principles of object oriented programming and HTML canvas to render shapes and breath a life into them."
        thumbnail={LifesimThumbnail}
        technologies={['Typescript', 'HTML', 'CSS']}
        prev={{
          title: 'ID-SK 3',
          href: '/idsk3'
        }}
        next={{
          title: 'Pathfinder',
          href: '/pathfinder'
        }}
        href="https://lubosgarancovsky.github.io/LifeSim/"
      >
        <Section title="Features">
          <div className="grid tb2:grid-cols-3 gap-8">
            <Card title="OOP" icon={<Box />}>
              Based on the principles of object oriented programming
            </Card>
            <Card title="Terrain generation" icon={<Terrain />}>
              Terrain is generated using Perlin's noise algorithm
            </Card>
            <Card title="Decision tree" icon={<TreeStructure />}>
              Design pattern commonly used in video games
            </Card>
          </div>
        </Section>

        <Section title="Gallery">
          <div className="flex flex-col gap-8">
            <img
              src={Lifesim03}
              className="rounded-xl"
              alt="lifesim - terrain"
              width={1920}
              height={1080}
            />
            <img
              src={Lifesim01}
              className="rounded-xl"
              alt="lifesim - details"
              width={1920}
              height={1080}
            />
            <img
              src={Lifesim02}
              className="rounded-xl"
              alt="lifesim - settings"
              width={1920}
              height={1080}
            />
          </div>
        </Section>
      </ProjectLayout>
    </Layout>
  );
};

export default LifesimPage;
