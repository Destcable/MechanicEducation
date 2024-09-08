import axios from "axios";
import { TeacherCard } from "../../ui/TeacherCard/TeacherCard";
import { useEffect, useState } from "react";
import { routesConfig } from "../../core/config/routes.config";
import { Loading } from "../../ui/Loading";

interface Teacher { 
    id: number;
    name: string;
    title: string | null;
}

const TeachersPage = () => {
    const [teachers, setTeachers] = useState<Teacher[] | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchTeachers = async () => {
            setLoading(true);

            try {
                const { data } = await axios.get(routesConfig.userAPIRoutes.getAllTeachers());
                setTeachers(data);
            } finally {
                setLoading(false)
            }
        };

        fetchTeachers();
    }, []);

    if (loading) return <Loading />

    return <div className="d-flex gap-3 flex-wrap">
        {teachers && teachers.map(teacher => (
            <TeacherCard
                key={teacher.id}
                name={teacher.name}
                jobTitle={teacher.title ?? 'Администратор'}
            />
        ))}
    </div>
};

export default TeachersPage;