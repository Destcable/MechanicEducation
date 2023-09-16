import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from './pages/main/mainPage';
import VideoLecturePage from './pages/lecture/VideoLecturePage';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import TraningPage from './pages/traning/traningPage';
import trainings_1 from "./tranings_1.json";
import trainings_2 from "./tranings_2.json";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage title="Машиностроение" />,
  },
  {
    path: "/videoLecture",
    element: <VideoLecturePage title="Машиностроение" />,
  },
  {
    path: "/traning",
    element: <TraningPage traning={trainings_1} title="Машиностроение" />
  },
  {
    path: "/infoLecture",
    element: <TraningPage traning={trainings_2} title="Машиностроение" />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);