import { FC, ReactNode, Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../../../ui/Loading";
import getStorageAuth from "../../../services/getStorageAuth";
import AuthFormContainer from "../../../containers/AuthFormContainer";
import { login } from "../../../core/services/auth.service";
import { Sidebar } from "./Sidebar";
// import Header from "../../../components/ui/Header/Header";
// import Footer from "../../../ui/Elements/Footer/Footer";

export const Layout = () => {
    const [isAuth, setAuth] = useState(false);

    if (!isAuth) {
        const { login: loginUser, password } = getStorageAuth();

        if (loginUser && password) {
            const dataLogin = login(loginUser, password);
            dataLogin.then(data => setAuth(data));
        }
        return <AuthFormContainer onSuccess={() => setAuth(true)} />
    }

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <Sidebar />
            <Content>
                <Suspense fallback={<Loading />}>
                    <div className="page-container">
                        {/* <Header /> */}
                        <div className="main-content">
                            <div className="content-wrap">
                                <Outlet />
                            </div>
                        </div>
                        {/* <Footer
                            isBottom={true}
                            backgroundColorTringle="#f8f9fa"
                        /> */}
                    </div>
                </Suspense>
            </Content>

        </div>
    )
};


interface IContentProps {
    children: ReactNode
}

const Content: FC<IContentProps> = ({ children }) => {
    return (
        <div style={{ flexGrow: 1 }}>
            {children}
        </div>
    )
}