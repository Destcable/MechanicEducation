import { FC } from "react";
import { IoCallOutline } from "react-icons/io5";
import { BsChatSquareText } from "react-icons/bs";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";

interface ITeacherCardProps { 
    name: string
    jobTitle: string
}

export const TeacherCard: FC<ITeacherCardProps> = ({name, jobTitle}) => {
    return <div className="card">
        <div className="card-body text-center">
            <div className="text-end">
                <PiDotsThreeOutlineVerticalLight size='25px' />
            </div>
            <div>
                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle" style={{ width: '150px' }}
                    alt="Avatar" />
            </div>
            <div>
                <p className="fs-4 fw-bold">{name}</p>
                <p>{jobTitle}</p>
            </div>

            <div style={{ display: 'flex', gap: '13px', justifyContent: 'center', alignItems: 'center' }}>
                <button
                    type="button"
                    className="btn btn-outline-secondary"
                    style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                >
                    <IoCallOutline size='20px' />Позвонить
                </button>
                <button
                    type="button"
                    className="btn btn-outline-secondary"
                    style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                >
                    <BsChatSquareText size='18px' />Написать
                </button>
            </div>
        </div>
    </div>
};