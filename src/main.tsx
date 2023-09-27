import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from './pages/main/mainPage';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import TraningPage from './pages/traning/traningPage';
import trainings_1 from "./tranings_1.json";
import trainings_2 from "./tranings_2.json";
import trainings_3 from "./tranings_3.json";
import trainings_4 from "./tranings_4.json";
import trainings_5 from "./tranings_5.json";
import quest_1 from "./quest_1.json";
import LectureMainPage from './pages/lectureMain/LectureMainPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage title="Машиностроение" />,
  },
  {
    path: "/traning",
    element: <TraningPage traning={trainings_1} title="Машиностроение" />
  },
  {
    path: "/trainingLecture",
    element: <LectureMainPage title="Машиностроение" />
  },
  {
    path: "/infoLecture_1",
    element: <TraningPage traning={trainings_2} title="Машиностроение" />
  },
  {
    path: "/infoLecture_2",
    element: <TraningPage traning={trainings_3} title="Машиностроение" />
  },
  {
    path: "/infoLecture_3",
    element: <TraningPage traning={trainings_4} title="Машиностроение" />
  },
  {
    path: "/infoLecture_4",
    element: <TraningPage traning={trainings_5} title="Машиностроение" />
  },
  {
    path: "/quest_1",
    element: <TraningPage traning={quest_1} title="Машиностроение" />
  }

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);