import { FieldValues, UseFormRegister } from "react-hook-form";

interface IAuthFormProps { 
    onSubmit: (data: any) => void,
    register: UseFormRegister<FieldValues>
}

const AuthForm = (props: IAuthFormProps) => ( 
    <form className='m-5' onSubmit={props.onSubmit}>
        <div className="form-group" id="formBasicEmail">
            <label>Введите E-mail</label>
            <input type="email" className="form-control" placeholder="Введите email" {...props.register('email')}/>
        </div>

        <div className="form-group">
            <label>Введите пароль</label>
            <input type="password" className="form-control" placeholder="Введите пароль" {...props.register('password')}/>
            <small className="form-text text-muted">Укажите пароль который был выслан на почту</small>
        </div>
        
        <br />
        <button type="submit" className="btn p-2 w-100 text-white" style={{backgroundColor: '#4f7094'}}>Войти</button>
    </form>
)

export default AuthForm;