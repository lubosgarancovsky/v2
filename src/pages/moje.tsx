import {
  Layout,
  Section,
  ProjectLayout,
  Card,
  Auth,
  Download,
  User
} from '../components';
import PAPThumbnail from '../assets/images/pap/pap-thumbnail.webp';
import PAP01 from '../assets/images/pap/01.webp';
import PAP02 from '../assets/images/pap/02.webp';
import PAP03 from '../assets/images/pap/03.webp';
import PAP04 from '../assets/images/pap/04.webp';

function MojePage() {
  return (
    <Layout>
      <ProjectLayout
        title="Moje Slovensko"
        description="Moje Slovensko is another component of public administration system.
            It functions as a personal zone of a citizen, a dashboard where they
            can change various settings of their profile, browse their electronic mailbox or perform actions on
            behalf of a subject they represent."
        thumbnail={PAPThumbnail}
        technologies={['Next.js', 'Tailwind', 'NextAuth', 'i18next']}
        prev={{ href: '/ksdr', title: 'KSDR' }}
        next={{ href: '/idsk3', title: 'ID-SK 3' }}
      >
        <Section title="Features">
          <div className="grid tb2:grid-cols-3 gap-8">
            <Card title="Authentication" icon={<Auth />}>
              JWT based authentication system and SAML provider
            </Card>
            <Card title="File display" icon={<Download />}>
              Downloading and visualisation of various file formats
            </Card>
            <Card title="On behalf of" icon={<User />}>
              Accessing the system on behalf of another user
            </Card>
          </div>
        </Section>
        <Section title="Problems solved">
          <div className="flex flex-col gap-8">
            <div>
              <span className="inline-block mb-0.5">User roles</span>
              <p className="text-foreground-100">
                When accessing the system on behalf of another user, some
                buttons and inputs had to be disabled and entire sections of the
                UI hidden based on the level of permissions of the subject. I
                created wrappers and higher order components to make this
                process reliable and efficient while keeping the code clean and
                readable.
              </p>
            </div>

            <div>
              <span className="inline-block mb-0.5">Poor performance</span>
              <p className="text-foreground-100">
                Handling XML documents received by the mailbox became a serious
                challenge in terms of performance. The utility I developed to
                manage these documents became a critical component of the
                project, significantly reducing loading times and providing
                reliable error handling for invalid data.
              </p>
            </div>
          </div>
        </Section>
        <Section title="Gallery">
          <div className="flex flex-col gap-8">
            <img
              src={PAP03}
              className="rounded-xl"
              alt="Moje Slovensko - login"
              width={1920}
              height={1080}
            />
            <img
              src={PAP01}
              className="rounded-xl"
              alt="Moje Slovensko - dashboard"
              width={1920}
              height={1080}
            />
            <img
              src={PAP02}
              className="rounded-xl"
              alt="Moje Slovensko - live event"
              width={1920}
              height={1080}
            />
            <img
              src={PAP04}
              className="rounded-xl"
              alt="Moje Slovensko - detail"
              width={1920}
              height={1080}
            />
          </div>
        </Section>
      </ProjectLayout>
    </Layout>
  );
}

export default MojePage;
