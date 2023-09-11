import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from './pages/main/mainPage';
import LecturePage from './pages/lecture/LecturePage';
import {createBrowserRouter, RouterProvider} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage title="Машиностроение" />,
  },
  {
    path: "/test",
    element: <LecturePage title="Машиностроение" />,
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);