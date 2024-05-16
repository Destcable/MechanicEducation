import { CSSProperties, useState } from "react";
import ProfileWindow from "../ProfileWindow/ProfileWindow";

const Profile = () => {
    const [getPage, setPage] = useState('INFO');

    const textStyle: CSSProperties = {
        color: '#43698F '
    };

    return <ProfileWindow>
        <div className="text-zadanie w-100 fs-6 h-88">
            <div className="d-flex container-filling align-center justify-content-center fw-light w-100 h-100">
                <div className="container-fluid h-100" style={textStyle}>
                    <div className="row h-100" style={textStyle}>
                        <div className="col-md-3 sidebar bg-light h-100 rounded-3">
                            <nav className="nav flex-column">
                                <a className="nav-link" href="#" onClick={() => setPage('INFO')}>Информация</a>
                                <a className="nav-link" href="#" onClick={() => setPage('GRADES')}>Оценки</a>
                                <a className="nav-link" href="#" onClick={() => setPage('SETTINGS')}>Настройки</a>
                            </nav>
                        </div>

                        <div className="col-md-9" style={textStyle}>
                            {getPage === 'INFO' &&
                                <div className="content" style={textStyle}>
                                    <h1>Информация</h1>
                                    <p>Здесь будет содержимое профиля пользователя...</p>
                                </div>
                            }

                            {getPage === 'GRADES' &&
                                <div className="content" style={textStyle}>
                                    <h1>Оценки</h1>
                                    <p>Находится в разработке...</p>
                                </div>
                            }

                            {getPage === 'SETTINGS' &&
                                <div className="content" style={textStyle}>
                                    <h1>Настройки</h1>
                                    <p>Находится в разработке...</p>
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ProfileWindow>
};

export default Profile;
