import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/main/mainPage";
import TraningPage from './pages/traning/traningPage';
import trainings_1 from "./content/tranings/traning_1.json";
import question_1 from "./content/questions/question_1.json";
import LectureMainPage from './pages/lectureMain/LectureMainPage';
import ResultPage from "./pages/result";

export const Routes = createBrowserRouter([
    { path: "/", element: <MainPage /> },
    { path: "/trainingLecture", element: <LectureMainPage /> },
    { path: "/traning_1", element: <TraningPage title="Виртуальный тренажер" traning={trainings_1} /> },
    { path: "/question_1", element: <TraningPage title="Интерактивная мини-игра" traning={question_1} /> },
    { path: "/result", element: <ResultPage /> }
]);