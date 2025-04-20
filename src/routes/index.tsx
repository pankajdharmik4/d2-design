import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import Dashboard from '../dashboard/Dashboard';

export const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/dashboard', element: <Dashboard /> },
]);
