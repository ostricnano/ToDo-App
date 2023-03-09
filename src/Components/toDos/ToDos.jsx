import React from 'react'
import HeaderToDo from './HeaderToDo'
import './ToDos.css';

export default function ToDos() {
  return (
    <div className='toDo-task'>
      <HeaderToDo />
      <form className='toDo-task-form' action="">
        <input className='todo-task-input' type="text" placeholder="To-Do-Task" />
      <button className='add-task-button'>Create Task</button>
      </form>
    </div>
  )
}
