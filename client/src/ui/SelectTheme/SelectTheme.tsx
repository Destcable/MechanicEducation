import { CSSProperties } from "react";
import Header from "../../components/ui/Header/Header";
import Footer from "../../components/ui/footer/footer";
import Tringle from "../../components/ui/tringle/tringle";
import Button from "../Button/Button";

const SelectTheme = () => { 
    const mainBlock: CSSProperties = { 
        marginTop: "150px",
        columnGap: "90px"
    }

    return(
        <>
            <Header />

            <div className="d-flex justify-content-center flex-wrap" style={mainBlock}>
                <div className="d-flex align-items-center w-50 justify-content-between border rounded-3 p-2">
                    <span>123</span>
                    <div>
                        <Button id='1' className='text-white w-100 p-1'>Пройти</Button>
                    </div>
                </div>
            </div>
            
            <Tringle />
            <Footer />    
        </>
    );
};

export default SelectTheme;