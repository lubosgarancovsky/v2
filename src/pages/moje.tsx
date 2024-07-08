import { ArrowLink, Layout, Section, Image, Badge } from '../components';
import PAP01 from '../assets/images/pap/01.webp';
import PAP02 from '../assets/images/pap/02.webp';
import PAP03 from '../assets/images/pap/03.webp';
import PAP04 from '../assets/images/pap/04.webp';

function MojePage() {
  return (
    <Layout>
      <div className="flex justify-between items-center">
        <ArrowLink href="/">Back</ArrowLink>

        <span className="text-foreground-100">2024</span>
      </div>
      <Section>
        <p className="mb-2">Moje Slovensko</p>
        <div className="flex flex-col gap-6">
          <p className="text-foreground-100">
            Moje Slovensko is another component of public administration system.
            It functions as a personal zone of a citizen, a dashboard where he
            can change various settings of his profile or perform actions on
            behalf of a subject he represents.
          </p>
          <p className="text-foreground-100">
            The application is built on the reliable Next.js framework and
            styled with Tailwind CSS. Emphasis was placed on the responsiveness
            and accessibility of the user interface, which is translated into
            Slovak and English using i18next. The application also includes a
            robust permission control system, where certain parts of the UI are
            hidden or disabled for users without the necessary permissions. User
            authentication is handled using the NextAuth library, ensuring
            secure and efficient login processes.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Badge>Next.js</Badge>
            <Badge>React</Badge>
            <Badge>NextAuth</Badge>
            <Badge>i18next</Badge>
            <Badge>Tailwindcss</Badge>
          </div>
        </div>
      </Section>
      <Section title="Gallery">
        <div className="grid tb2:grid-cols-2 gap-3">
          <div className="flex flex-col gap-3">
            <Image src={PAP03} />
            <Image src={PAP01} />
          </div>

          <div className="flex flex-col gap-3">
            <Image src={PAP02} />
            <Image src={PAP04} />
          </div>
        </div>
      </Section>
      <div>
        <div className="flex justify-between">
          <span className="text-foreground-100">Previous</span>
          <span className="text-foreground-100">Next</span>
        </div>
        <div className="flex justify-between items-center">
          <ArrowLink href="/ksdr">KSDR</ArrowLink>
          <ArrowLink href="/aurora" arrowPosition="right">
            Aurora
          </ArrowLink>
        </div>
      </div>
    </Layout>
  );
}

export default MojePage;
