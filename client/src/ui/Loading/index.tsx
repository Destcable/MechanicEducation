import { FC } from 'react';
import ReactLoading, { LoadingType } from 'react-loading';

interface ILoading { 
    type?: LoadingType;
    color?: string;
    title?: string;
    height?: string;
    width?: string;
}

const Loading: FC<ILoading> = ({ 
    type = 'spin', 
    color = '#2E97C3', 
    title = 'Загрузка...', 
    height = '90%', 
    width = '90%' 
}) => {
    return (
        <div className='d-flex h-100 align-items-center justify-content-center'>
            <div>
                <ReactLoading
                    type={type}
                    color={color}
                    height={height}
                    width={width}
                />
                <h6>{title}</h6>
            </div>
        </div>
    )
};

export default Loading;