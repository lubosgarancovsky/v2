import React from 'react';
import {
  Card,
  Layout,
  PaintBrush,
  Phone,
  ProjectLayout,
  Section
} from '../components';

import Pathfinder01 from '../assets/images/pathfinder/pathfinder-01.png';
import Pathfinder02 from '../assets/images/pathfinder/pathfinder-02.png';
import Pathfinder03 from '../assets/images/pathfinder/pathfinder-03.png';

const PathfinderPage: React.FC = () => {
  return (
    <Layout>
      <ProjectLayout
        title="Pathfinder"
        description="A tool that visualizes the steps of pathfinding algorithms in a 2D grid. It allows free drawing of a maze, which is then navigated by the pathfinding algorithm."
        thumbnail={Pathfinder01}
        technologies={['React', 'Typescript']}
        prev={{
          title: 'Lifesim',
          href: '/lifesim'
        }}
        next={{
          title: 'MC Manager',
          href: '/mcmanager'
        }}
        href="https://lubosgarancovsky.github.io/pathfinder/"
      >
        <Section title="Features">
          <div className="grid tb2:grid-cols-3 gap-8">
            <Card title="Drawing area" icon={<PaintBrush />}>
              A large and responsive grid area that allows free-form drawing
            </Card>
            <Card title="Responsivity" icon={<Phone />}>
              Size of the grid is computed based on the screen size
            </Card>
          </div>
        </Section>
        <Section title="Gallery">
          <div className="flex flex-col gap-8">
            <img
              src={Pathfinder02}
              className="rounded-xl"
              alt="lifesim - terrain"
              width={1920}
              height={1080}
            />
            <img
              src={Pathfinder03}
              className="rounded-xl"
              alt="lifesim - details"
              width={1920}
              height={1080}
            />
          </div>
        </Section>
      </ProjectLayout>
    </Layout>
  );
};

export default PathfinderPage;
