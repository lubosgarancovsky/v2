import React from 'react';
import {
  Layout,
  ArrowLink,
  Section,
  Badge,
  Github,
  Image
} from '../components';

import MC01 from '../assets/images/mcmanager - thumbnail.webp';
import MC02 from '../assets/images/mcmanager/01.webp';

const McManager: React.FC = () => {
  return (
    <Layout>
      <div className="flex justify-between items-center">
        <ArrowLink href="/v2/">Back</ArrowLink>
        <span className="text-foreground-100">2024</span>
      </div>
      <Section>
        <p className="mb-2">MC Manager</p>
        <div className="flex flex-col gap-6">
          <p className="text-foreground-100">
            MC Manager is a desktop application built using Rust's{' '}
            <a className="link" href="https://tauri.app/" target="_blank">
              Tauri
            </a>{' '}
            framework paired with a React frontend. It streamlines the managment
            of Minecraft resources like mods, texture packs and shaders.
          </p>
          <p className="text-foreground-100">
            The application offers a simple and intuitive user interface powered
            by the{' '}
            <a className="link" href="https://nextui.org/" target="_blank">
              NextUI
            </a>{' '}
            library, which communicates with a Rust backend to ensure a
            performant and secure environment.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Badge>React</Badge>
            <Badge>Tauri</Badge>
            <Badge>Rust</Badge>
          </div>
        </div>
      </Section>
      <Section title="Links">
        <ul className="flex gap-2 tb1:gap-8 flex-col tb1:flex-row">
          <li>
            <a
              className="flex items-center gap-3 link"
              href="https://github.com/lubosgarancovsky/mc-manager"
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
            src={MC01}
            alt="PLANPAL - dashboard"
            width={1920}
            height={1080}
          />
          <Image src={MC02} alt="PLANPAL - tags" width={1920} height={1080} />
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
};

export default McManager;
