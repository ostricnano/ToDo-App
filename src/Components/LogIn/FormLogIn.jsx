import Header from '../Header/Header'
import { Link } from 'react-router-dom';
import userForm from '../../hooks/userFormLogin'
import './FormLogIn.css'

export default function FormLogIn() {
  
  const initialData = {
    email:'',
    password:''
  }
  
  const onValidate = (user) => {
    let errors = {};
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    if(!user.email.trim()){
      errors.email = 'Usuario incorrecto'
    }else if(!regexEmail.test(user.email)) {
      errors.email = 'Usuario incorrecto'
    }

    if(!user.password.trim()) {
      errors.password = 'Ingrese la contrasea'
    } else if (user.password.length < 6){
      errors.password = 'contraseña incorrecta'
    }
    return errors;
  }
  const {user, errors, handleChange,handleSubmit} =userForm(initialData, onValidate)

  return (
    <div className='login'>
      <Header />

      <div className="login-todo">
        <div className='todo-form' >
            <h3>To-Do-App</h3>
            <p className='login-text'>Login</p>
            <form action="" onSubmit={handleSubmit}>
              <label htmlFor="">Email</label>
              <input 
                type="Text" 
                name='email'
                value={user.email || ''}
                onChange={handleChange}
              />
              {errors.email && <div className="alert">{errors.email}</div>}
              <br />
              <label htmlFor="">Contraseña</label>
              <input 
                type="Password" 
                name='password'
                value={user.password || ''}
                onChange={handleChange}
              />
              {errors.password && <div className="alert">{errors.password}</div>}
              <br />
              <Link to="/To-Dos">
                <button className='login-button' type='submit'>Ingresar</button>
              </Link>
            </form>
        </div>
        <Link to="/sing-up">¿No tiene una cuenta? Registrate aqui</Link>
      </div>
    </div>
  )
}
