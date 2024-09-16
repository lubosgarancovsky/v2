import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './pages/homepage.tsx';
import KsdrPage from './pages/ksdr.tsx';
import MojePage from './pages/moje.tsx';
import AuroraPage from './pages/aurora.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import PlanpalPage from './pages/planpal.tsx';
import McManager from './pages/mcmanager.tsx';
import { ReactLenis } from '@studio-freight/react-lenis';
import IdskPage from './pages/idsk3.tsx';
import PathfinderPage from './pages/pathfinder.tsx';
import LifesimPage from './pages/lifesim.tsx';

const base = '/v2';

const router = createBrowserRouter([
  {
    path: base,
    element: <Homepage />
  },
  {
    path: base + '/ksdr',
    element: <KsdrPage />
  },
  {
    path: base + '/moje-slovensko',
    element: <MojePage />
  },
  {
    path: base + '/aurora',
    element: <AuroraPage />
  },
  {
    path: base + '/planpal',
    element: <PlanpalPage />
  },
  {
    path: base + '/mcmanager',
    element: <McManager />
  },
  {
    path: base + '/idsk3',
    element: <IdskPage />
  },
  {
    path: base + '/lifesim',
    element: <LifesimPage />
  },
  {
    path: base + '/pathfinder',
    element: <PathfinderPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReactLenis root>
      <RouterProvider router={router} />
    </ReactLenis>
  </React.StrictMode>
);
