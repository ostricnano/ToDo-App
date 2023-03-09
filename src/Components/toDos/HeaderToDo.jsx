import './HeaderToDo.css'
import React,{useState, useEffect} from 'react'
import userLogo from '../../assets/user.png'


export default function HeaderToDo() {
    const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9zdHJpY21hcmlhbm9AZ21haWwuY29tIiwiaWQiOjE0LCJpYXQiOjE2NzgzNzQ0NzB9.J7uAuxwD5B10uD_ilhGPujLYZYVSC_kSfCTa6UPM6mg"
    const urlGetUsuario = 'http://todo-api.ctd.academy:3000/v1/users/getMe';
    const [userInfo, setUserInfo] = useState({})
    const settings = {
        method: 'GET',
        headers: {
            'authorization': token,
        }
    };

    useEffect(() => {
        fetch(urlGetUsuario,settings)
        .then(response => response.json())
        .then(data =>{
            console.log(data)
            setUserInfo(data)
        })
    },[])

  return (
    <div className='header-To-Do'>
        <div className='Logo'>
            <p className='logo-text'>To-Do-App</p>
        </div>
        <div className='user'>
            <p className='userInfo'>Hello {userInfo.firstName} !! </p>
            <img className='user-logo' src={userLogo} alt="" />
            <button className='log-out'>Cerrar Sesion</button>
        </div>
    </div>
  )
}
