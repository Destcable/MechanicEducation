import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import AuthForm from "../ui/AuthForm/AuthForm";
import { AuthFormData } from '../interfaces/auth';
import { useNavigate } from 'react-router-dom';
import { login } from '../core/services/auth.service';

interface IAuthFormContainerProps { 
    onSuccess?: () => void
}

const AuthFormContainer = (props: IAuthFormContainerProps) => { 
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();    
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {

        const authData: AuthFormData = {
            login: data.login,
            password: data.password
        };

        const dataLogin = await login(authData.login, authData.password);
    
        if (dataLogin) {
            localStorage.setItem('auth-login', authData.login);
            localStorage.setItem('auth-password', authData.password);
            navigate('/');
            if (props.onSuccess) props.onSuccess();
        }
    };

    return <AuthForm 
        onSubmit={handleSubmit(onSubmit)}
        register={register}
    />
};

export default AuthFormContainer;