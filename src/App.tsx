import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import ContactList from '@pages/ContactList';
// import UpdateCreateContact from '@pages/UpdateCreateContact';
// import PageNotFound from '@pages/PageNotFound';
// import ReadContact from '@pages/ReadContact';
import ContactList from './pages/ContactList';
import UpdateCreateContact from './pages/UpdateCreateContact';
import PageNotFound from './pages/PageNotFound';
import ReadContact from './pages/ReadContact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ContactList />,
  },
  {
    path: "/contacts/create",
    element: <UpdateCreateContact />,
  },
  {
    path: "/contacts/updated:id",
    element: <UpdateCreateContact />,
  },
  {
    path: "/contacts/read:id",
    element: <ReadContact />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

