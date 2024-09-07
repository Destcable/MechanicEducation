import { FC, ReactNode, Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import Loading from "../../../ui/Loading";
import { CCloseButton, CSidebar, CSidebarBrand, CSidebarFooter, CSidebarHeader } from "@coreui/react";
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
    return (<CSidebar
        className="border-end"
        colorScheme="dark"
        position="fixed"
        // unfoldable={unfoldable}
        visible={true}
    // onVisibleChange={(visible) => {
    //   dispatch({ type: 'set', sidebarShow: visible })
    // }}
    >
        <CSidebarHeader className="border-bottom">
            <CSidebarBrand to="/">
            {/* <CIcon customClassName="sidebar-brand-full" icon={logo} height={32} />
            <CIcon customClassName="sidebar-brand-narrow" icon={sygnet} height={32} /> */}
          </CSidebarBrand>
            <CCloseButton
                className="d-lg-none"
                dark
            // onClick={() => dispatch({ type: 'set', sidebarShow: false })}
            />
        </CSidebarHeader>
        {/* <AppSidebarNav items={navigation} /> */}
        <CSidebarFooter className="border-top d-none d-lg-flex">
            {/* <CSidebarToggler
            onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
          /> */}
        </CSidebarFooter>
    </CSidebar>
    )
    // return (
    //     <aside className="sidebar">
    //         <nav>
    //             <ul>
    //                 <li><Link to="/dashboard">Dashboard</Link></li>
    //                 <li><Link to="/projects">Projects</Link></li>
    //                 <li><Link to="/tasks">Tasks</Link></li>
    //                 {/* Add more links as needed */}
    //             </ul>
    //         </nav>
    //     </aside>
    // );
};