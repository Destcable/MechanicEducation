import Header from '../components/ui/Header/Header';
import Card from '../components/ui/Card/card';
import Footer from '../ui/Elements/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CSSProperties } from 'react';
import { Theme } from '../interfaces/theme';
import useQueryTopicThemes from '../hooks/useQueryTopicThemes';
import { store } from '../reducer';

interface IMainPageProps { 
    dataTopic: Theme
    onThemeSelected: (data: any) => void
}

const SelectThemeContainer = (props: IMainPageProps) => {
    const { data } = useQueryTopicThemes(props.dataTopic?.id);
    store.dispatch({ type: 'headerTheme/change', payload: props.dataTopic.name });

    const mainBlock: CSSProperties = { 
        marginTop: "150px",
        columnGap: "90px"
    }

    if (data) { 
        return (
            <>
                <Header />
    
                <div className="d-flex justify-content-center flex-wrap" style={mainBlock}>
                    {data.map((theme: Theme, idx: number) => (
                        <Card 
                            key={idx}
                            title={theme.title}
                            description={theme.description}
                            lineName={"test"}
                            href={data.href}
                            onClick={() => props.onThemeSelected(theme)}
                        />
                    ))}
                </div>
                
                <Footer 
                    isBottom={false}
                />
            </>
    
        )
    }
}

export default SelectThemeContainer;