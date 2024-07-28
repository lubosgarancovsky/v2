import {
  ArrowLink,
  Layout,
  Section,
  Image,
  Badge,
  Link,
  Github
} from '../components';
import PLANPAL01 from '../assets/images/planpal/01.webp';
import PLANPAL02 from '../assets/images/planpal - thumbnail.webp';

function PlanpalPage() {
  return (
    <Layout>
      <div className="flex justify-between items-center">
        <ArrowLink href="/v2/">Back</ArrowLink>

        <span className="text-foreground-100">2024</span>
      </div>
      <Section>
        <p className="mb-2">PlanPal</p>
        <div className="flex flex-col gap-6">
          <p className="text-foreground-100">
            A React to-do list application bootstrapped with{' '}
            <a className="link" href="https://vitejs.dev/" target="_blank">
              Vite
            </a>{' '}
            , using{' '}
            <a className="link" href="https://mockapi.io/" target="_blank">
              mockapi.io
            </a>{' '}
            to store tasks and supporting all CRUD operations for data
            persistence.
          </p>
          <p className="text-foreground-100">
            Tasks can have multiple tags, be marked as done, or categorized by
            three priority levels. They can also be exported as a JSON file and
            later imported back.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Badge>React</Badge>
            <Badge>Tailwindcss</Badge>
          </div>
        </div>
      </Section>
      <Section title="Links">
        <ul className="flex gap-2 tb1:gap-8 flex-col tb1:flex-row">
          <li>
            <a
              className="flex items-center gap-3 link"
              href="https://lubosgarancovsky.github.io/planpal/"
              target="_blank"
            >
              <Link className="w-5" />
              <span>GH pages</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-3 link"
              href="https://github.com/lubosgarancovsky/planpal"
              target="_blank"
            >
              <Github className="w-5" />
              <span>Github repository</span>
            </a>
          </li>
        </ul>
      </Section>
      <Section title="Gallery">
        <div className="flex flex-col gap-3">
          <Image
            src={PLANPAL02}
            alt="PLANPAL - dashboard"
            width={1920}
            height={1080}
          />
          <Image
            src={PLANPAL01}
            alt="PLANPAL - tags"
            width={1920}
            height={1080}
          />
        </div>
      </Section>
      <div>
        <div className="flex justify-between">
          <span className="text-foreground-100">Previous</span>
          <span className="text-foreground-100">Next</span>
        </div>
        <div className="flex justify-between items-center">
          <ArrowLink href="/v2/aurora">Aurora</ArrowLink>
          <ArrowLink href="/v2/ksdr" arrowPosition="right">
            KSDR
          </ArrowLink>
        </div>
      </div>
    </Layout>
  );
}

export default PlanpalPage;
