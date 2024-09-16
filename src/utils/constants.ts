import { Project } from '../types';

import PathfinderThumbanil from '../assets/images/pathfinder - thumbnail.webp';
import LifesimThumbanil from '../assets/images/lifesim - thumbnail.webp';

export const projects: Project[] = [
  {
    img: LifesimThumbanil,
    title: 'LifeSim',
    description: 'Ecosystem simulation',
    link: '/v2/lifesim',
    year: '2023'
  },
  {
    img: PathfinderThumbanil,
    title: 'Pathfinder',
    description: 'Pathfinding algorithm visualiser',
    link: '/v2/pathfinder',
    year: '2023'
  },
  {
    img: LifesimThumbanil,
    title: 'MC Manager',
    description: 'Rust desktop application',
    link: '/v2/mcmanager',
    year: '2023'
  },
  {
    img: LifesimThumbanil,
    title: 'Aurora',
    description: 'Spring boot project managment tool',
    link: '/v2/aurora',
    year: '2023'
  }
];
