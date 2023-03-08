
import './App.css'
import Header from './Components/Header/Header'
import FormLogIn from './Components/LogIn/FormLogIn'
import SingUp from './Components/SingUp/SingUp'
import { Route, Routes } from 'react-router-dom'


function App() {
  

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={< FormLogIn/>} />
        <Route path='/sing-up' element={< SingUp/>} />
      </Routes>
    </div>
  )
}

export default App
