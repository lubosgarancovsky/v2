import {
  Layout,
  Section,
  ProjectLayout,
  Download,
  Auth,
  Card,
  Access
} from '../components';
import KSDR01 from '../assets/images/ksdr/01.webp';
import KSDR02 from '../assets/images/ksdr/02.webp';
import KSDR03 from '../assets/images/ksdr/03.webp';
import KSDRThumbnail from '../assets/images/ksdr/ksdr-thumbnail.webp';

function KsdrPage() {
  return (
    <Layout>
      <ProjectLayout
        title="KSDR"
        description="KSDR is a component of public administration system that allows
              slovak citizens or businesses to access and share their official documents with public authorities."
        thumbnail={KSDRThumbnail}
        technologies={['Next.js', 'Tailwind', 'NextAuth', 'i18next']}
        prev={{ href: '/aurora', title: 'Aurora' }}
        next={{ href: '/moje-slovensko', title: 'Moje slovensko' }}
      >
        <Section title="Features">
          <div className="grid tb2:grid-cols-3 gap-8">
            <Card title="Authentication" icon={<Auth />}>
              JWT based authentication system with multiple providers
            </Card>
            <Card title="File display" icon={<Download />}>
              Downloading and visualisation of various file formats
            </Card>
            <Card title="Access control" icon={<Access />}>
              Restricting access based on multiple forms of authentication
            </Card>
          </div>
        </Section>

        <Section title="Problems solved">
          <div className="flex flex-col gap-8">
            <div>
              <span className="inline-block mb-0.5">XML transformation</span>
              <p className="text-foreground-100">
                Transformation of the XML documents done by Firefox's rendering
                engine caused errors in some cases. Manual sanitization of the
                XML was needed to ensure reliable rendering across all browsers.
              </p>
            </div>

            <div>
              <span className="inline-block mb-0.5">Route access controll</span>
              <p className="text-foreground-100">
                Users can access some of the private routes if they authenticate
                with a passcode, which introduced additional complexity. I had
                to ensure that users were redirected correctly according to
                their access rights.
              </p>
            </div>

            <div>
              <span className="inline-block mb-0.5">
                Unreliable 3rd party API
              </span>
              <p className="text-foreground-100">
                While creating a library for a functionality shared between
                multiple projects, I had to work with a 3rd party API that was
                horribly designed and unreliable. I utilized heavy type checking
                and refetching in case of errors to minimize the impact of the
                flaws of the API.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Gallery">
          <div className="flex flex-col gap-8">
            <img
              src={KSDR01}
              className="rounded-xl"
              alt="KSDR - login"
              width={1920}
              height={1080}
            />
            <img
              src={KSDR02}
              className="rounded-xl"
              alt="KSDR - mailbox"
              width={1920}
              height={1080}
            />
            <img
              src={KSDR03}
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
}

export default KsdrPage;
