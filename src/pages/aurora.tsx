import {
  ArrowLink,
  Badge,
  Layout,
  Section,
  Image,
  Github
} from '../components';

import AUR00 from '../assets/images/aurora - thumbnail.png';
import AUR01 from '../assets/images/aurora/01.webp';
import AUR02 from '../assets/images/aurora/02.webp';
import AUR03 from '../assets/images/aurora/03.webp';
import AUR04 from '../assets/images/aurora/04.webp';

function AuroraPage() {
  return (
    <Layout>
      <div className="flex justify-between items-center">
        <ArrowLink href="/">Back</ArrowLink>

        <span className="text-foreground-100">2024</span>
      </div>
      <Section>
        <p className="mb-2">Aurora</p>
        <div className="flex flex-col gap-6">
          <p className="text-foreground-100">
            Aurora is my personal full-stack web application designed to allow
            users to create and manage their projects efficiently by creating
            tasks and subtasks, reassigning them between team members, and
            moving them between different states.
          </p>
          <p className="text-foreground-100">
            The front end of the application is powered by the Next.js
            framework, along with powerful libraries like TanStack Query for
            data fetching and caching, and NextAuth for secure authentication.
            The back end utilizes the robust Java Spring Boot framework,
            employing a relational PostgreSQL database to store data and a REST
            API to facilitate communication between the client and server.
          </p>
          <p className="text-foreground-100">
            My aim was to build a powerful API that utilizes RSQL to simplify
            sorting and filtering of data, enhancing the overall user experience
            by making data management more intuitive and efficient.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Badge>Next.js</Badge>
            <Badge>NextAuth</Badge>
            <Badge>TanStack Query</Badge>
            <Badge>Spring Boot</Badge>
            <Badge>Spring Security</Badge>
            <Badge>PostgreSQL</Badge>
            <Badge>Flyway</Badge>
            <Badge>Jooq</Badge>
          </div>
        </div>
      </Section>
      <Section title="Links">
        <ul className="flex gap-2 tb1:gap-8 flex-col tb1:flex-row">
          <li>
            <a
              className="flex items-center gap-3 link"
              href="https://github.com/lubosgarancovsky/aurora-fe"
              target="_blank"
            >
              <Github className="w-5" />
              <span>Front end</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-3 link"
              href="https://github.com/lubosgarancovsky/aurora-be"
              target="_blank"
            >
              <Github className="w-5" />
              <span>Back end</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-3 link"
              href="https://github.com/lubosgarancovsky/be_lib"
              target="_blank"
            >
              <Github className="w-5" />
              <span>RSQL library</span>
            </a>
          </li>
        </ul>
      </Section>
      <Section title="Gallery">
        <div className="flex flex-col gap-3">
          <Image src={AUR01} />
          <Image src={AUR02} />

          <Image src={AUR03} />
          <Image src={AUR00} />
          <Image src={AUR04} />
        </div>
      </Section>
      <div>
        <div className="flex justify-between">
          <span className="text-foreground-100">Previous</span>
          <span className="text-foreground-100">Next</span>
        </div>
        <div className="flex justify-between items-center">
          <ArrowLink href="/moje-slovensko">Moje Slovensko</ArrowLink>
          <ArrowLink href="/ksdr" arrowPosition="right">
            KSDR
          </ArrowLink>
        </div>
      </div>
    </Layout>
  );
}

export default AuroraPage;
