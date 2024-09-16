import React from 'react';
import {
  Accessibility,
  Card,
  Feather,
  IDSK3Logo,
  Layout,
  ProjectLayout,
  Section,
  Svg
} from '../components';

import Idsk01 from '../assets/images/idsk/idsk-01.png';
import Idsk02 from '../assets/images/idsk/idsk-02.png';
import Idsk03 from '../assets/images/idsk/idsk-03.png';

const IdskPage: React.FC = () => {
  return (
    <Layout>
      <ProjectLayout
        title="ID-SK 3"
        description="React UI library that follows the design used in many modern web platforms of the slovak goverment and other slovak public authorities."
        thumbnail={
          <div className="bg-black flex p-8 justify-center items-center rounded-2xl">
            <IDSK3Logo />
          </div>
        }
        technologies={['React', 'Tailwind', 'Storybook', 'Jest']}
        prev={{ href: '/moje-slovensko', title: 'Moje Slovensko' }}
        next={{ href: '/lifesim', title: 'LifeSim' }}
        href="https://github.com/id-sk/esvk_web_lib_idsk3_react"
      >
        <Section title="Features">
          <div className="grid tb2:grid-cols-3 gap-8">
            <Card title="Accessibility" icon={<Accessibility />}>
              Implementation of hover, focus, active, disabled states and
              WAI-ARIA design patterns
            </Card>
            <Card title="React - Svgr" icon={<Svg />}>
              Automatic translation of svg files into React components with svgr
            </Card>
            <Card title="Lightweight" icon={<Feather />}>
              Very few dependencies make the library small in size
            </Card>
          </div>
        </Section>

        <Section title="Problems solved">
          <div className="flex flex-col gap-8">
            <div>
              <span className="inline-block mb-0.5">Bold hover state</span>
              <p className="text-foreground-100">
                Bold text in hover state of a button causes it to get wider and
                therefore breaks the layout. I have solved this issue by adding
                a hidden pseudo-element under the label of a button which is
                bold all the time keeping the button width consistent.
              </p>
            </div>

            <div>
              <span className="inline-block mb-0.5">
                Dropdown overflowing the viewport
              </span>
              <p className="text-foreground-100">
                If a dropdown is opened near the bottom of the screen, it should
                appear above the trigger rather than below, as the user would
                need to scroll down to see its content. I created a custom hook
                that determines the optimal position for the dropdown after it
                is clicked, incorporating a short debounce to prevent it from
                blinking on the screen.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Gallery">
          <div className="flex flex-col gap-8">
            <img
              src={Idsk01}
              className="rounded-xl"
              alt="KSDR - login"
              width={1920}
              height={1080}
            />
            <img
              src={Idsk02}
              className="rounded-xl"
              alt="KSDR - mailbox"
              width={1920}
              height={1080}
            />
            <img
              src={Idsk03}
              className="rounded-xl"
              alt="KSDR - detail"
              width={1920}
              height={1080}
            />
          </div>
        </Section>
      </ProjectLayout>
    </Layout>
  );
};

export default IdskPage;
