import Footer from "../../components/ui/footer/footer";
import Tringle from "../../components/ui/tringle/tringle";
import { Theme } from "../../interfaces/theme";
import Button from "../Button/Button";



interface ISelectThemeProps { 
    themes: Theme[],
    onClick: (data: Theme) => void
}

const SelectTheme = (props: ISelectThemeProps) => { 
    return( 
        <>
        <div className="d-grid m-5 gap-4">
            {props.themes.map((item, key) => 
                <Button 
                    key={key}
                    id={item.id}
                    className='text-white w-100 p-2'
                    onClick={() => props.onClick(item)}
                >
                    {item.name}
                </Button> 
            )}
        </div>
        <Tringle />
        <Footer />
        </>
    )
};

export default SelectTheme;