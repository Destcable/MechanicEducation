import {Route, Routes } from "react-router-dom";
import App from "./app";
import AuthFormContainer from "./containers/AuthFormContainer";

const Router = () => { 
    return <Routes>
        <Route path="/login" element={<AuthFormContainer />} />
        <Route path="/" element={<App />} />
    </Routes>
};

export default Router;