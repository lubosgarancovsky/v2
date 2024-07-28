import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './pages/homepage.tsx';
import KsdrPage from './pages/ksdr.tsx';
import MojePage from './pages/moje.tsx';
import AuroraPage from './pages/aurora.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import PlanpalPage from './pages/planpal.tsx';

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
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
