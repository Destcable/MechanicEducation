import profLogo from './img/prof.png';

const Footer = () => {
    return (
        <footer className="d-flex justify-content-center">
            <div className="footer1 d-flex flex-wrap">
                <div className="footer_columns d-flex mt-20 mb-10 flex-wrap">
                    <div className="d-flex flex-column">
                        <h4 className="text-white">ФГОС СПО 15.02.16</h4>
                        <p className="text-white mt-10">Технология машиностроения</p>
                    </div>
                    <div className="blockmdk d-flex flex-column">
                        <h4 className="text-white ">МДК 01.01</h4>
                        <p className="text-white mt-10"> Разработка технологических процессов изготовления деталей машин с применением систем автоматизированного проектирования</p>
                    </div>
                </div>

                <div className="d-flex flex-column mt-20">
                    <div className="column3 d-flex">
                        <div className="white_line_left footer_third-col">
                            <h5 className="text-white">Цифровой образовательный контент</h5>
                        </div>
                        <div className="img_logo_prof">
                            <img src={profLogo} alt="prof_logo"/>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
};

export default Footer;