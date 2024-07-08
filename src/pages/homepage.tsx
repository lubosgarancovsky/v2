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
import PapThumbnail from '../assets/images/pap - thumbnail.jpg';
import KsdrThumbnail from '../assets/images/ksdr - thumbnail.jpg';
import AuroraThumbnail from '../assets/images/aurora - thumbnail.png';
import PathfinderThumbanil from '../assets/images/pathfinder - thumbnail.png';
import LifesimThumbanil from '../assets/images/lifesim - thumbnail.png';
import WatherThumbanil from '../assets/images/weather - thumbnail.png';
import NotesThumbanil from '../assets/images/notes - thumbnail.webp';
import SkitLogo from '../assets/images/skit - logo.png';
import { Project } from '../types';

function Homepage() {
  const projects: Project[] = [
    {
      img: PathfinderThumbanil,
      title: 'Pathfinder',
      description: 'Pathfinding algorithm visualiser',
      link: 'https://lubosgarancovsky.github.io/pathfinder/',
      year: '2023'
    },
    {
      img: LifesimThumbanil,
      title: 'LifeSim',
      description: 'Ecosystem simulation',
      link: 'https://lubosgarancovsky.github.io/LifeSim/',
      year: '2023'
    },
    {
      img: WatherThumbanil,
      title: 'WeatherApp',
      description: 'Weather forecast',
      link: 'https://github.com/lubosgarancovsky/WeatherApp',
      year: '2022'
    },
    {
      img: 'https://camo.githubusercontent.com/fa37e3b8c31dbeb45670a418a9650d705a10e0de9c873165cb1ec111ff2571ee/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f706f7274666f6c696f2d35366233392e61707073706f742e636f6d2f6f2f706f7274666f6c696f25324670726f6a65637473253246627269636b2d627265616b65722d707967616d65253246627269636b2d627265616b65722d67616d652e706e673f616c743d6d6564696126746f6b656e3d38333765316462322d373832382d346661302d613730652d353037333033326535393035',
      title: 'Brick Breaker',
      description: 'Python game',
      link: 'https://github.com/lubosgarancovsky/BrickBreaker',
      year: '2022'
    },
    {
      img: NotesThumbanil,
      title: 'My simple notes',
      description: 'Android note taking application',
      link: 'https://github.com/lubosgarancovsky/MySimpleNotes',
      year: '2022'
    }
  ];

  return (
    <Layout>
      <section id="hero">
        <p>Ľuboš Garančovský</p>
        <p className="text-foreground-100">Web developer</p>

        <p className="text-foreground-100 mt-8 max-w-2xl">
          My main focus is to write feature rich web applications with an
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
              <img src={KsdrThumbnail} />
            </div>
          </Card>
          <Card
            href="/v2/moje-slovensko"
            title="Moje Slovensko"
            description="Personal zone of a citizen"
          >
            <div className="px-8 pt-8">
              <img src={PapThumbnail} />
            </div>
          </Card>
          <Card
            href="/v2/aurora"
            title="Aurora"
            description="Project managment application"
          >
            <div className="px-8 pt-8">
              <img src={AuroraThumbnail} />
            </div>
          </Card>
        </div>
      </Section>
      <Section title="Other projects & experiments">
        <ul className="opaque-list">
          {projects.map((project, index) => (
            <FloatingThumbnail src={project.img}>
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
        subtitle="I specialize in technologies that run on Java and Javascript"
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
            <img src={SkitLogo} />
          </div>
          <div className="flex flex-col w-full">
            <span>Software engineer</span>
            <span className="text-foreground-200">Slovensko IT a.s.</span>
          </div>
          <p className="text-foreground-200 text-nowrap">2022 - present</p>
        </a>
      </Section>
      <Section
        title="Contact"
        subtitle="Dont forget to include your e-mail, so I can message you back"
      >
        <ContactForm />
      </Section>
    </Layout>
  );
}

export default Homepage;
