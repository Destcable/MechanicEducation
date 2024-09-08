import { useEffect, useState } from "react";
import Loading from "../ui/Loading";
import SelectTopic from "../ui/SelectTopic/SelectTopic";
import axios from "axios";
import { courseAPIRoutes } from "../core/config/routes.config";

interface ISelectThemeContainerProps { 
    onTopicSelected: (data: any) => void
}

const SelectTopicContainer = (props: ISelectThemeContainerProps) => { 
    const [courses, setCourses] = useState(null); 
    const [loading, setLoading] = useState(false);    
    useEffect(() => { 
        const fetchCourses = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(courseAPIRoutes.getAll());
                setCourses(data)    
            } finally {
                setLoading(false);
            }
        };

        fetchCourses()
    }, [])
    
    if (loading) return <Loading />
    if (courses) return <SelectTopic topics={courses} onClick={props.onTopicSelected} />
};

export default SelectTopicContainer;