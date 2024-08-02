import { ArrowLink, Layout, Section, Image, Badge } from '../components';
import KSDR01 from '../assets/images/ksdr/01.webp';
import KSDR02 from '../assets/images/ksdr/02.webp';
import KSDR03 from '../assets/images/ksdr/03.webp';

function KsdrPage() {
  return (
    <Layout>
      <div className="flex justify-between items-center">
        <ArrowLink href="/v2/">Back</ArrowLink>

        <span className="text-foreground-100">2024</span>
      </div>
      <Section>
        <p className="mb-2">KSDR</p>
        <div className="flex flex-col gap-6">
          <p className="text-foreground-100">
            <a
              href="https://www.nases.gov.sk/sluzby-spristupnovania-zdielania-dorucovanych-rozhodnuti"
              className="link"
              target="_blank"
            >
              "Komponent sprístupňovania doručovaných rozhodnutí"
            </a>{' '}
            - is a component of public administration system that allows slovak
            citizens or businesses to view and share their official documents.
          </p>
          <p className="text-foreground-100">
            In this project, my role was to implement a user interface that
            connects to several REST APIs using the Next.js framework, coupled
            with NextAuth for authentication. The application features robust
            access control, with the UI dynamically adjusting based on the
            user's role. This ensures that each user has access to the specific
            functionalities and data pertinent to their role, enhancing both
            security and user experience.
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
            <Image src={KSDR01} alt="KSDR - login" width={1920} height={1080} />
            <Image
              src={KSDR02}
              alt="KSDR - mailbox"
              width={1920}
              height={1080}
            />
          </div>
          <Image src={KSDR03} alt="KSDR - detail" width={1920} height={1080} />
        </div>
      </Section>
      <div>
        <div className="flex justify-between">
          <span className="text-foreground-100">Previous</span>
          <span className="text-foreground-100">Next</span>
        </div>
        <div className="flex justify-between items-center">
          <ArrowLink href="/v2/mcmanager">MC Manager</ArrowLink>
          <ArrowLink href="/v2/moje-slovensko" arrowPosition="right">
            Moje Slovensko
          </ArrowLink>
        </div>
      </div>
    </Layout>
  );
}

export default KsdrPage;
