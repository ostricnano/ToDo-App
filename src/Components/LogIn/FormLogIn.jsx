import { useState } from 'react';
import './FormLogIn.css'

export default function FormLogIn() {
  const [user, setUser] = useState({});

  const handleChange = ({ target }) => {
    const{name, value} = target;
    setUser((prev)=>({
      ...prev,
      id: Date.now(),
      [name]: value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="login-todo">
      <div className='todo-form' >
          <h3>To-Do-App</h3>
          <p className='login-text'>Login</p>
          <label htmlFor="">Email</label>
          <br />
          <input 
            type="email" 
            name='email'
            value={user.email}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="">Contraseña</label>
          <br />
          <input 
            type="text" 
            name='password'
            value={user.password}
            onChange={handleChange}
          />
          <br />
          <button className='login-button' type='submit'>Ingresar</button>
      </div>
      <a href="">¿No tiene una cuenta? Registrate aqui</a>
    </div>
  )
}