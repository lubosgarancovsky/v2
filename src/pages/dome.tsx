import {
  Layout,
  Section,
  ProjectLayout,
  Card,
  Lock,
  Binary,
  Console
} from '../components';

import DOME00 from '../assets/images/dome - thumbnail.webp';
import DOME01 from '../assets/images/dome/dome-01.webp';
import DOME02 from '../assets/images/dome/dome-02.webp';
import DOME03 from '../assets/images/dome/dome-03.webp';

function DomePage() {
  return (
    <Layout>
      <ProjectLayout
        title="Dome"
        description="Dome is a CLI password manager written in Rust that stores encrypted passwords safely inside the local vault. Entries containing passwords are serialized into binary data and stored into a vault file. Every time something changes inside this vault, an index file is updated to allow for quick retrieval of stored data."
        thumbnail={DOME00}
        prev={{
          title: 'ID-SK 3',
          href: '/idsk3'
        }}
        next={{
          title: 'LifeSim',
          href: '/lifesim'
        }}
        technologies={['Rust']}
        href="https://github.com/lubosgarancovsky/dome"
      >
        <Section title="Features">
          <div className="grid tb2:grid-cols-3 gap-8">
            <Card title="Encryption" icon={<Lock />}>
              Key derivation and encryption of sensitive data
            </Card>
            <Card title="CLI Commands" icon={<Console />}>
              Supports a series of powerful and easy-to-remember commands
            </Card>
            <Card title="Binary serialization" icon={<Binary />}>
              Entries are serialized and indexed in binary format
            </Card>
          </div>
        </Section>
        <Section title="Gallery">
          <div className="flex flex-col gap-8">
            <img
              src={DOME01}
              className="rounded-xl"
              alt="Dome - commands"
              width={1920}
              height={1080}
            />
            <img
              src={DOME02}
              className="rounded-xl"
              alt="Dome - add entry"
              width={1920}
              height={1080}
            />
            <img
              src={DOME03}
              className="rounded-xl"
              alt="Dome - list entries"
              width={1920}
              height={1080}
            />
          </div>
        </Section>
      </ProjectLayout>
    </Layout>
  );
}

export default DomePage;
