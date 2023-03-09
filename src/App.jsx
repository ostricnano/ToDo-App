
import './App.css'
import FormLogIn from './Components/LogIn/FormLogIn'
import SingUp from './Components/SingUp/SingUp'
import ToDos from './Components/toDos/ToDos'
import { Route, Routes } from 'react-router-dom'


function App() {
  

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<FormLogIn/>} />
        <Route path='/sing-up' element={<SingUp/>} />
        <Route path='/To-Dos' element={<ToDos />} />
      </Routes>
    </div>
  )
}

export default App
