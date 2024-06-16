import { FC, ReactNode } from "react";
import Header from "../../components/ui/Header/Header";
import HomeButton from "../HomeButton/HomeButton";
import Footer from "../Elements/Footer/Footer";

interface ProfileWindowProps {
    children?: ReactNode;
}

const ProfileWindow: FC<ProfileWindowProps> = ({ children }) => (
    <div className="page-container">
        <div className="content-wrap bg_color_block">
            <Header />
            <div className="d-flex flex-column ">
                <div className="d-flex justify-content-center align-center">
                    <div className="content1 d-flex flex-column max-content w-100">
                        <HomeButton />
                        <div className="container1">
                            <p className="container_header container_title ps-4 mb-0">Профиль</p>
                            <div className="w-100 h-100">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer
            isTringle={false}
            isBottom={true}
            backgroundColorTringle="rgba(160, 190, 221, 50%)"
        />
    </div>
);

export default ProfileWindow;