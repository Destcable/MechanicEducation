import { FC, ReactNode, Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import Loading from "../../../ui/Loading";
import { Sidebar as SidebarReact, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import Header from "../../../components/ui/Header/Header";
// import Footer from "../../../ui/Elements/Footer/Footer";

export const Layout = () => {
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
            <MenuItem component={<Link to="/main" />}> Главная </MenuItem>
            <MenuItem> Предметы </MenuItem>
            <SubMenu label="Charts">
                <MenuItem> Pie charts </MenuItem>
                <MenuItem> Line charts </MenuItem>
            </SubMenu>
            <MenuItem> Сообщения </MenuItem>
        </Menu>
    </SidebarReact>;
};