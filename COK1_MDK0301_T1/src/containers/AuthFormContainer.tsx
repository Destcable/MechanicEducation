import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import AuthForm from "../ui/AuthForm";
import authService from '../services/authService';
import { AuthFormData } from '../interfaces/auth';

interface IAuthFormContainerProps { 
    onSuccess: () => void
}

const AuthFormContainer = (props: IAuthFormContainerProps) => { 
    const {register, handleSubmit} = useForm();

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const authData: AuthFormData = {
            email: data.email,
            password: data.password
        };
    
        if (authService.login(authData.email, authData.password)) {
            localStorage.setItem('auth-login', authData.email);
            localStorage.setItem('auth-password', authData.password);
            props.onSuccess();
        }
    };

    return <AuthForm 
        onSubmit={handleSubmit(onSubmit)}
        register={register}
    />
};

export default AuthFormContainer;