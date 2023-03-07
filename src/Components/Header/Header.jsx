import React from 'react'
import logo from '../../assets/DigitalHouse_Logo_White.png'
import './Header.css'

export default function Header() {
  return (
    <div className='toDo-header'>
        <p>To-Do-App</p>
        <img 
            className='todo-logo'
            src={logo} 
            alt="" 
            width={300}
            height={70}
        />
    </div>
  )
}
