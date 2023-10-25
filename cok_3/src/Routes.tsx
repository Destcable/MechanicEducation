import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/main/mainPage";
import TraningPage from './pages/traning/traningPage';
import trainings_1 from "./content/tranings/traning_1.json";
import lecture_1 from "./content/lectures/lecture_1.json";
import lecture_2 from "./content/lectures/lecture_2.json";
import lecture_3 from "./content/lectures/lecture_3.json";
import lecture_4 from "./content/lectures/lecture_4.json";
import question_1 from "./content/questions/question_1.json";
import LectureMainPage from './pages/lectureMain/LectureMainPage';
import ResultPage from "./pages/result";


export const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "/trainingLecture",
        element: <LectureMainPage />
    },
    {
        path: "/lecture_1",
        element: <TraningPage traning={lecture_1} />
    },
    {
        path: "/lecture_2",
        element: <TraningPage traning={lecture_2} />
    },
    {
        path: "/lecture_3",
        element: <TraningPage traning={lecture_3} />
    },
    {
        path: "/lecture_4",
        element: <TraningPage traning={lecture_4} />
    },
    {
        path: "/traning_1",
        element: <TraningPage traning={trainings_1} />
    },
    {
        path: "/question_1",
        element: <TraningPage traning={question_1} />
    },
    {
        path: "/result",
        element: <ResultPage />
    }
]);