import { CSSProperties } from 'react';
import Tringle from '../../../components/ui/tringle/tringle';
import profLogo from './img/prof.png';
import chemkLogo from './img/chemk_logo.png';

interface IFooterProps { 
    isBottom?: boolean;
}


const Footer = ({ isBottom = true }: IFooterProps) => { 
    
    const bottomStyle: CSSProperties = { 
        position: 'fixed', 
        bottom: 0, 
        left: 0, 
        width: '100%', 
        boxSizing: 'border-box', 
        zIndex: 999
    };

    return (
        <div style={isBottom == true ? bottomStyle : undefined}>
            <Tringle />
            <footer className="d-flex justify-content-center">
                <div className="footer1 d-flex flex-wrap">
                    <div className="footer_columns d-flex mt-1 mb-1 flex-wrap align-items-center">
                        <div className="d-flex flex-column align-items-center">
                            <img style={{ width: '90px' }} className='ms-2' src={chemkLogo} alt="chemk_logo" />
                            {/* <h4 className="text-white">ФГОС СПО 15.02.16</h4> */}
                            {/* <p className="text-white mt-10">Технология машиностроения</p> */}
                        </div>
                        <div className="blockmdk d-flex flex-column">
                            <h4 className="text-white ">МЦК-ЧЭМК</h4>
                            <p className="text-white mt-2 mb-2">«Межрегиональный центр компетенций – Чебоксарский электромеханический колледж»</p>
                        </div>
                    </div>

                    <div className="d-flex flex-column mt-3 align-items-center">
                        <div className="column3 d-flex mb-3">
                            <div className="d-flex white_line_left footer_third-col align-items-center">
                                <h5 className="text-white ">Цифровой образовательный контент</h5>
                            </div>
                            <div className="img_logo_prof">
                                <img style={{ width: '100px' }} className='ms-2' src={profLogo} alt="prof_logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
};

export default Footer;