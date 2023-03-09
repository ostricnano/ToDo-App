
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm'
import './SingUp.css'


export default function SingUp() {

    const initialData = {
      nombre:'',
      apellido:'',
      email:'',
      password:''
    }

    const onValidate = (user) => {
      let errors = {}
      let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
      let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

      if(!user.nombre.trim()){
        errors.nombre = 'El nombre no debe estar vacio'
      } else if(!regexName.test(user.nombre)){
        errors.nombre = 'El nombre solo acepta letras y espacios'
      }

      if(!user.apellido.trim()){
        errors.apellido = 'El apellido no debe estar vacio'
      } else if(!regexName.test(user.apellido)){
        errors.apellido = 'El apellido solo acepta letras y espacios'
      }

      if(!user.email.trim()){
        errors.email = 'El email no debe estar vacio'
      } else if(!regexEmail.test(user.email)){
        errors.email = 'El formato del email no es valido'
      }
      if(!user.password.trim()){
        errors.password = ' El campo no debe estar vacio'
      } else if(user.password.length < 6) {
        errors.password = 'La contrasena no es valida'
      }
      if(user.password !== user.password2){
        errors.password2 = 'Las contraseñas deben ser igual'
      }
      return errors;
    }
    
  const {user, errors, loading, handleChange, handleSubmit} = useForm(initialData, onValidate)


  return (
    <div className='singup'>
      <div className='singup-form'>
        <h3>To-Do-App</h3>
        <p className='singup-text'>Register</p>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Nombre</label>
            <input 
              type="Text"
              name='nombre'
              value={user.nombre || ''}
              onChange={handleChange}
            />
            {errors.nombre && <div className="alert">{errors.nombre}</div>}
            <br />
            <label htmlFor="">Apellido</label>
            <input 
              type="Text"
              name='apellido'
              value={user.apellido || ''}
              onChange={handleChange}
            />
            {errors.apellido && <div className="alert">{errors.apellido}</div>}
            <br />
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
              <label htmlFor="">Repetir contraseña</label>
              <input 
                type="Password"
                name='password2'
                value={user.password2 || ''}
                onChange={handleChange}
              />
              <br />
              {errors.password2 && <div className="alert">{errors.password2}</div>}
          <button type='submit' className='singup-button'>Crear Cuenta</button>
        </form>
      </div>
      <Link to="/">¿Ya tienes una cuenta? Ingrese aqui</Link>
    </div>
  )
}
