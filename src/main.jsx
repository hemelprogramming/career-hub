import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import AppliedJob from './components/AppliedJobs/AppliedJob';
import ErrorPage from './components/ErrorPage/ErrorPage';
import JobDetails from './components/JobDetails/JobDetails';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/applied',
        element: <AppliedJob></AppliedJob>,
        loader: () => fetch('jobs.json'),
      },
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('../jobs.json'),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
