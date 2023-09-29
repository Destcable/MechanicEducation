import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/main/mainPage";
import TraningPage from './pages/traning/traningPage';
import trainings_1 from "./tranings_1.json";
import trainings_2 from "./tranings_2.json";
import trainings_3 from "./tranings_3.json";
import trainings_4 from "./tranings_4.json";
import trainings_5 from "./tranings_5.json";
import quest_1 from "./quest_1.json";
import LectureMainPage from './pages/lectureMain/LectureMainPage';

export const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "/traning",
        element: <TraningPage traning={trainings_1} />
    },
    {
        path: "/trainingLecture",
        element: <LectureMainPage />
    },
    {
        path: "/infoLecture_1",
        element: <TraningPage traning={trainings_2} />
    },
    {
        path: "/infoLecture_2",
        element: <TraningPage traning={trainings_3} />
    },
    {
        path: "/infoLecture_3",
        element: <TraningPage traning={trainings_4} />
    },
    {
        path: "/infoLecture_4",
        element: <TraningPage traning={trainings_5} />
    },
    {
        path: "/quest_1",
        element: <TraningPage traning={quest_1} />
    },
]);