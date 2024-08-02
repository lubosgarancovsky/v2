import {
  BlockItem,
  Card,
  ContactForm,
  FloatingThumbnail,
  Layout,
  LinkBadge,
  Nextjs,
  React,
  Section,
  Spring,
  Tailwind
} from '../components';
import PapThumbnail from '../assets/images/pap - thumbnail.webp';
import KsdrThumbnail from '../assets/images/ksdr - thumbnail.webp';
import AuroraThumbnail from '../assets/images/aurora - thumbnail.webp';
import McManagerThumbnail from '../assets/images/mcmanager - thumbnail.webp';

import SkitLogo from '../assets/images/skit - logo.webp';
import { projects } from '../utils';

function Homepage() {
  return (
    <Layout>
      <section id="hero">
        <p>Ľuboš Garančovský</p>
        <p className="text-foreground-100">Web developer</p>

        <p className="text-foreground-100 mt-8 max-w-2xl">
          My main focus is to write feature-rich web applications with an
          emphasis on reliability and performance.
        </p>

        <div className="flex gap-3 mt-8">
          <LinkBadge href="https://github.com/lubosgarancovsky" target="_blank">
            Github
          </LinkBadge>
          <LinkBadge
            href="https://www.linkedin.com/in/lubos-garancovsky/"
            target="_blank"
          >
            Linkedin
          </LinkBadge>
        </div>
      </section>

      <Section title="Pinned projects">
        <div className="grid grid-cols-1 tb2:grid-cols-2 gap-12 opaque-list">
          <Card
            href="/v2/ksdr"
            title="KSDR"
            description="Platform for viewing and sharing official documents"
          >
            <div className="px-8 pt-8">
              <img
                src={KsdrThumbnail}
                alt="ksdr - thumbnail"
                width={350}
                height={180}
              />
            </div>
          </Card>
          <Card
            href="/v2/moje-slovensko"
            title="Moje Slovensko"
            description="Personal zone of a citizen"
          >
            <div className="px-8 pt-8">
              <img
                src={PapThumbnail}
                alt="pap - thumbnail"
                width={350}
                height={180}
              />
            </div>
          </Card>
          <Card
            href="/v2/aurora"
            title="Aurora"
            description="Project managment application"
          >
            <div className="px-8 pt-8">
              <img
                src={AuroraThumbnail}
                alt="aurora - thumbnail"
                width={350}
                height={180}
              />
            </div>
          </Card>
          <Card
            href="/v2/mcmanager"
            title="MC Manager"
            description="Minecraft resources manager"
          >
            <div className="px-8 pt-8">
              <img
                src={McManagerThumbnail}
                alt="mc manager - thumbnail"
                width={350}
                height={180}
              />
            </div>
          </Card>
        </div>
      </Section>
      <Section title="Other projects & experiments">
        <ul className="opaque-list">
          {projects.map((project, index) => (
            <FloatingThumbnail
              src={project.img}
              alt={project.title}
              width={350}
              height={180}
            >
              <li key={index}>
                <a
                  href={project.link}
                  target="_blank"
                  className="flex w-full gap-3 items-center py-2"
                >
                  <span className="text-nowrap">{project.title}</span>
                  <span className="text-foreground-100 hidden tb2:inline text-nowrap">
                    {project.description}
                  </span>
                  <div className="h-[2px] bg-background-100 w-full mx-4"></div>
                  <span className="text-foreground-100 ml-auto">
                    {project.year}
                  </span>
                </a>
              </li>
            </FloatingThumbnail>
          ))}
        </ul>
      </Section>
      <Section
        title="Stack"
        subtitle="I focus on developing with Java and JavaScript"
      >
        <div className="grid tb1:grid-cols-2 gap-4">
          <BlockItem icon={<React />}>React</BlockItem>
          <BlockItem icon={<Nextjs />}>Next.js</BlockItem>
          <BlockItem icon={<Tailwind />}>Tailwindcss</BlockItem>
          <BlockItem icon={<Spring />}>Spring boot</BlockItem>
        </div>
      </Section>
      <Section title="Experience">
        <a
          className="flex items-center gap-4"
          target="_blank"
          href="https://slovenskoit.sk/"
        >
          <div className="rounded-full overflow-hidden w-16">
            <img src={SkitLogo} alt="skit - logo" width={64} height={64} />
          </div>
          <div className="flex flex-col w-full">
            <span>Software engineer</span>
            <span className="text-foreground-200">Slovensko IT a.s.</span>
          </div>
          <p className="text-foreground-200 text-nowrap">2022 - 2024</p>
        </a>
      </Section>
      <Section
        title="Contact"
        subtitle="Include your email and I will get back to you as soon as possible"
      >
        <ContactForm />
      </Section>
    </Layout>
  );
}

export default Homepage;
