import React from 'react';
import {
  Layout,
  Section,
  ProjectLayout,
  Card,
  Folder,
  Rust,
  Json
} from '../components';

import MC01 from '../assets/images/mcmanager - thumbnail.webp';
import MC02 from '../assets/images/mcmanager/01.webp';

const McManager: React.FC = () => {
  return (
    <Layout>
      <ProjectLayout
        title="MC Manager"
        description="Desktop application simplifying the managment of Minecraft resources like mods, texture packs and shader packs."
        thumbnail={MC01}
        technologies={['Rust', 'Tauri', 'React']}
        prev={{
          title: 'Pathfinder',
          href: '/pathfinder'
        }}
        next={{
          title: 'Aurora',
          href: '/aurora'
        }}
        href="https://github.com/lubosgarancovsky/mc-manager"
      >
        <Section title="Features">
          <div className="grid tb2:grid-cols-3 gap-8">
            <Card title="Rust backend" icon={<Rust />}>
              All the heavy lifting is done by modern and perfomant Rust
              language
            </Card>
            <Card title="File system" icon={<Folder />}>
              Utilization of Rust File API to create, read and delete files
            </Card>
            <Card title="Serialization" icon={<Json />}>
              Serialization of Rust structs necessary for communication with
              React frontend
            </Card>
          </div>
        </Section>

        <Section title="Problems solved">
          <div className="flex flex-col gap-8">
            <div>
              <span className="inline-block mb-0.5">Modpack testing</span>
              <p className="text-foreground-100">
                When a large number of mods are installed into Minecraft, one or
                more mods may cause errors that prevent the game from launching.
                A tedious trial-and-error process is often required to identify
                which mod is causing the issue.
              </p>

              <p className="text-foreground-100 mt-4">
                To solve this problem, I created a desktop application that
                simplifies the process of removing mods from the game folder
                while allowing users to keep track of which mods they have
                already disabled. With a process similar to a binary search
                algorithm, the user can quickly identify the issue by clicking
                just a few buttons.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Gallery">
          <div className="flex flex-col gap-8">
            <img
              src={MC01}
              className="rounded-xl"
              alt="MC Manager - mods"
              width={1920}
              height={1080}
            />
            <img
              src={MC02}
              className="rounded-xl"
              alt="MC manager - resource packs"
              width={1920}
              height={1080}
            />
          </div>
        </Section>
      </ProjectLayout>
    </Layout>
  );
};

export default McManager;
