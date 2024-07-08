import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './pages/homepage.tsx';
import KsdrPage from './pages/ksdr.tsx';
import MojePage from './pages/moje.tsx';
import AuroraPage from './pages/aurora.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />
  },
  {
    path: '/ksdr',
    element: <KsdrPage />
  },
  {
    path: '/moje-slovensko',
    element: <MojePage />
  },
  {
    path: '/aurora',
    element: <AuroraPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
