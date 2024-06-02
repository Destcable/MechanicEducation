import { FieldValues, UseFormRegister } from "react-hook-form";
import profLogoDark from './img/prof_dark.png';
interface IAuthFormProps { 
    onSubmit: (data: any) => void,
    register: UseFormRegister<FieldValues>
}

const AuthForm = (props: IAuthFormProps) => ( 
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
            <img src={profLogoDark} alt="profLogoDark" style={{ width: '225px' }}/>
    <form className='m-5' onSubmit={props.onSubmit}>
        <div className="form-group mb-3" id="formBasicLogin">
            <label>Введите логин</label>
            <input type="text" className="form-control" placeholder="Введите логин" {...props.register('login')}/>
        </div>

        <div className="form-group">
            <label>Введите пароль</label>
            <input type="password" className="form-control" placeholder="Введите пароль" {...props.register('password')}/>
            <small className="form-text text-muted">Укажите пароль который был выслан на почту</small>
        </div>
        
        <br />
        <button type="submit" className="btn p-2 w-100 text-white" style={{backgroundColor: '#4f7094'}}>Войти</button>
    </form>
    </div>

)

export default AuthForm;