import { FC, ReactNode, Suspense, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Loading from "../../../ui/Loading";
import { Sidebar as SidebarReact, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import getStorageAuth from "../../../services/getStorageAuth";
import authService from "../../../services/authService";
import AuthFormContainer from "../../../containers/AuthFormContainer";
// import Header from "../../../components/ui/Header/Header";
// import Footer from "../../../ui/Elements/Footer/Footer";

export const Layout = () => {
    const [isAuth, setAuth] = useState(false);

    if (!isAuth) {
        const { login, password } = getStorageAuth();

        if (login && password) {
            const dataLogin = authService.login(login, password);
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



const Sidebar = () => {
    return <SidebarReact>
        <Menu>
            <MenuItem component={<Link to="/dashboard" />}> Главная </MenuItem>
            <MenuItem component={<Link to="/main" />}> Предметы </MenuItem>
            <MenuItem component={<Link to="/teachers" />}> Преподаватели </MenuItem>
            <SubMenu label="Charts">
                <MenuItem> Pie charts </MenuItem>
                <MenuItem> Line charts </MenuItem>
            </SubMenu>
            <MenuItem> Сообщения </MenuItem>
        </Menu>
    </SidebarReact>;
};