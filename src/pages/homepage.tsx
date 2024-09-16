import {
  // BlockItem,
  Layout,
  // Nextjs,
  // React,
  Section,
  // Spring,
  // Tailwind,
  PinnedProjects,
  OtherProjects,
  IconLink,
  LinkedIn,
  Github,
  // Animation,
  // Phone,
  // LinkBadge,
  // Tools,
  ContactForm
} from '../components';

import SkitLogo from '../assets/images/skit - logo.webp';
import { useRef } from 'react';

function Homepage() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <Layout headerTrigger={heroRef}>
      <Section id="hero" className="mt-12">
        <h1>
          Ľuboš <span className="text-blue-500">Garančovský</span>
        </h1>

        <p className="text-foreground-100 mt-4 max-w-2xl text-lg tb2:text-xl font-medium">
          React and Next.js web developer focusing on writing feature-rich web
          applications with emphasis on reliability and performance.
        </p>

        <div ref={heroRef} className="flex gap-3 mt-8">
          <IconLink
            href="https://www.linkedin.com/in/lubos-garancovsky/"
            icon={<LinkedIn />}
          >
            Linkedin
          </IconLink>
          <IconLink
            href="https://github.com/lubosgarancovsky"
            icon={<Github />}
          >
            Github
          </IconLink>
        </div>
      </Section>

      {/* <Section>
        <div className="grid gap-8 tb2:grid-cols-3">
          <div className="bg-background-100/50 p-6 rounded-xl">
            <Animation className="w-8 mb-8 text-blue-500" />
            Interactivity
            <p className="text-foreground-100 mt-2">
              I use performant tools to create beautifull
            </p>
          </div>

          <div className="bg-background-100/50 p-6 rounded-xl">
            <Phone className="w-8 mb-8 text-blue-500" />
            Responsivity
            <p className="text-foreground-100 mt-2">
              Lorem ipsum dolor sit amet
            </p>
          </div>

          <div className="bg-background-100/50 p-6 rounded-xl">
            <Tools className="w-8 mb-8 text-blue-500" />
            Reliability
            <p className="text-foreground-100 mt-2">
              Lorem ipsum dolor sit amet
            </p>
          </div>
        </div>
      </Section> */}

      <Section
        title="Pinned projects"
        subtitle="What I have worked on at Slovensko IT a.s."
      >
        <PinnedProjects />
      </Section>

      <Section
        title="Other projects & experiments"
        subtitle="Noteworthy personal projects"
      >
        <OtherProjects />
      </Section>

      {/* <Section
        title="Stack"
        subtitle="I focus on developing with Java and JavaScript"
      >
        <div className="grid tb1:grid-cols-2 gap-4">
          <BlockItem icon={<React />}>React</BlockItem>
          <BlockItem icon={<Nextjs />}>Next.js</BlockItem>
          <BlockItem icon={<Tailwind />}>Tailwindcss</BlockItem>
          <BlockItem icon={<Spring />}>Spring boot</BlockItem>
        </div>
      </Section> */}

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
            <span>Frontend engineer</span>
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
