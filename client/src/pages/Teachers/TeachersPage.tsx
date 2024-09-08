import axios from "axios";
import { TeacherCard } from "../../ui/TeacherCard/TeacherCard";
import { userAPIRoutes } from "../../core/config/routes.config";
import { useEffect, useState } from "react";
import Loading from "../../ui/Loading";

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
                const { data } = await axios.get(userAPIRoutes.getAllTeachers());
                setTeachers(data);
            } finally {
                setLoading(false)
            }
        };

        fetchTeachers();
    }, []);

    if (loading) {
        return <Loading />
    }

    return <div className="d-flex gap-3">
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