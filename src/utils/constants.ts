import { Project } from '../types';

import PathfinderThumbanil from '../assets/images/pathfinder - thumbnail.webp';
import LifesimThumbanil from '../assets/images/lifesim - thumbnail.webp';
import WatherThumbanil from '../assets/images/weather - thumbnail.webp';
import NotesThumbanil from '../assets/images/notes - thumbnail.webp';
import BrickBreakerThumbnail from '../assets/images/brickbreaker-thumbnail.webp';

export const projects: Project[] = [
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
    img: BrickBreakerThumbnail,
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
