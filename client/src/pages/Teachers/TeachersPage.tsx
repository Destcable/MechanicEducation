import { TeacherCard } from "../../ui/TeacherCard/TeacherCard";

const TeachersPage = () => {
    return <div className="d-flex gap-3">
        <TeacherCard name="Иванов Иван" jobTitle="Учитель математики" />
        <TeacherCard name="Павлов Артем" jobTitle="Учитель информатики" />
    </div>
};

export default TeachersPage;