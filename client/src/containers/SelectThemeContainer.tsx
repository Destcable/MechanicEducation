import Card from '../components/ui/Card/card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CSSProperties } from 'react';
import { Theme } from '../interfaces/theme';
import useQueryTopicThemes from '../hooks/useQueryTopicThemes';
import { useNavigate, useParams } from 'react-router-dom';
import { store } from '../core/store/reducer';

const mainBlock: CSSProperties = {
    marginTop: "150px",
    columnGap: "90px"
}

const SelectThemeContainer = () => {
    const navigate = useNavigate();
    const { topicId } = useParams();
    if (!topicId) return null;

    const { data } = useQueryTopicThemes(parseInt(topicId));
    if (!data) return null;

    store.dispatch({ type: 'headerTheme/change', payload: data.name });

    return (
        <div className="d-flex justify-content-center flex-wrap" style={mainBlock}>
            {data.map((theme: Theme, idx: number) => (
                <Card
                    key={idx}
                    title={theme.title}
                    description={theme.description}
                    lineName={"test"}
                    href={data.href}
                    onClick={() => navigate(`/theme/${theme.id}/tasks`, { replace: true })}
                />
            ))}
        </div>
    )
}

export default SelectThemeContainer;