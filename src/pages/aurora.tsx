import {
  Layout,
  Section,
  ProjectLayout,
  Card,
  Auth,
  Filter,
  Database
} from '../components';

import AUR00 from '../assets/images/aurora - thumbnail.webp';
import AUR01 from '../assets/images/aurora/01.webp';
import AUR02 from '../assets/images/aurora/02.webp';
import AUR03 from '../assets/images/aurora/03.webp';
import AUR04 from '../assets/images/aurora/04.webp';

function AuroraPage() {
  return (
    <Layout>
      <ProjectLayout
        title="Aurora"
        description="Aurora is my personal full-stack web application designed to allow
            users to create and manage their projects efficiently by creating
            tasks and subtasks, reassigning them between team members, and
            moving them between different states."
        thumbnail={AUR00}
        prev={{
          title: 'MC Manager',
          href: '/mcmanager'
        }}
        next={{
          title: 'KSDR',
          href: '/ksdr'
        }}
        technologies={[
          'Java',
          'Spring boot',
          'Spring security',
          'Jooq',
          'Postgresql',
          'Docker'
        ]}
        href="https://github.com/lubosgarancovsky/aurora-be"
      >
        <Section title="Features">
          <div className="grid tb2:grid-cols-3 gap-8">
            <Card title="Authentication" icon={<Auth />}>
              JWT authentication using Spring security
            </Card>
            <Card title="Jooq" icon={<Database />}>
              Utilization of Jooq ORM for type safe database access
            </Card>
            <Card title="RSQL" icon={<Filter />}>
              Support for filtering, sorting and paginations with RSQL
            </Card>
          </div>
        </Section>
        {/* <Section title="Problems solved">
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
        </Section> */}
        <Section title="Gallery">
          <div className="flex flex-col gap-8">
            <img
              src={AUR01}
              className="rounded-xl"
              alt="MC manager - resource packs"
              width={1920}
              height={1080}
            />
            <img
              src={AUR02}
              className="rounded-xl"
              alt="MC manager - resource packs"
              width={1920}
              height={1080}
            />
            <img
              src={AUR03}
              className="rounded-xl"
              alt="MC manager - resource packs"
              width={1920}
              height={1080}
            />
            <img
              src={AUR00}
              className="rounded-xl"
              alt="MC Manager - mods"
              width={1920}
              height={1080}
            />
            <img
              src={AUR04}
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
}

export default AuroraPage;
