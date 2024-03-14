import Header from '../../components/ui/Header/Header';
import Card from '../../components/ui/Card/card';
import Tringle from '../../components/ui/tringle/tringle';
import Footer from '../../components/ui/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CSSProperties } from 'react';
import { Theme } from '../../interfaces/theme';
import useQueryTopicThemes from '../../hooks/useQueryTopicThemes';

interface IMainPageProps { 
    dataTopic: Theme
}

const MainPage = (props: IMainPageProps) => {
    const { data } = useQueryTopicThemes(props.dataTopic?.id);

    const mainBlock: CSSProperties = { 
        marginTop: "150px",
        columnGap: "90px"
    }

    if (data) { 
        return (
            <>
                <Header
                    loading={false}
                />
    
                <div className="d-flex justify-content-center flex-wrap" style={mainBlock}>
                    {data.map((theme: Theme, idx: number) => (
                        <Card 
                            key={idx}
                            title={theme.title}
                            description={theme.description}
                            lineName={"test"}
                            href={data.href}
                        />
                    ))}
                </div>
    
                <Tringle />
                <Footer />
            </>
    
        )
    }
}

export default MainPage;