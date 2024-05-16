import { FC, ReactNode } from "react";
import Header from "../../components/ui/Header/Header";
import HomeButton from "../HomeButton/HomeButton";

interface ProfileWindowProps {
    children?: ReactNode;
}

const ProfileWindow: FC<ProfileWindowProps> = ({ children }) => (
    <>
        <Header />
        <div className="bg_color_block d-flex flex-column ">
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
    </>
);

export default ProfileWindow;