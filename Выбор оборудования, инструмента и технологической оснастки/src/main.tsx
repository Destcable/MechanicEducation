import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import { Routes } from './Routes';

ReactDOM.createRoot(document.getElementById("root")!).render(
    <RouterProvider router={Routes} />
);