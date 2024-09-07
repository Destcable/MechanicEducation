import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthFormContainer from "../../containers/AuthFormContainer";
import ResultWindowContainer from "../../containers/ResultWindowContainer";
import { Layout } from "../../shared/ui/Layout/Layout";
import { lazy } from "react";

const App = lazy(() => import("../../app"));
const ProfileContainer = lazy(() => import("../../containers/ProfileContainer"));
const SelectThemeContainer = lazy(() => import("../../containers/SelectThemeContainer"))
const SelectTaskContainer = lazy(() => import("../../containers/SelectTaskContainer"))
const TaskWrapper = lazy(() => import("../../shared/ui/TaskWrapper/TaskWrapper"))

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { 
                index: true,
                element: <Navigate to="/main" replace />
            },
            {
                path: 'main',
                element: <App />
            },
            { 
                path: 'topic/:topicId/themes',
                element: <SelectThemeContainer />
            },
            { 
                path: 'theme/:themeId/tasks',
                element: <SelectTaskContainer />
            },
            { 
                path: 'theme/:themeId/task/:taskId',
                element: <TaskWrapper />
            },
            {
                path: 'login',
                element: <AuthFormContainer />,
            },
            { 
                path: '/result/theme/:themeId',
                element: <ResultWindowContainer />
            },
            { 
                path: '/profile',
                element: <ProfileContainer />
            }
        ],
    },
]);