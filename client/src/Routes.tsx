import {Route, Routes } from "react-router-dom";
import App from "./app";
import AuthFormContainer from "./containers/AuthFormContainer";
import ProfileContainer from "./containers/ProfileContainer";

const Router = () => { 
    return <Routes>
        <Route path="/login" element={<AuthFormContainer />} />
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<ProfileContainer />} />
    </Routes>
};

export default Router;