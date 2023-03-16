import React,{ useEffect, useState } from 'react'
import HeaderToDo from './HeaderToDo'
import NewTask from './NewTask';
import TaskList from './TaskList'
import './ToDos.css';

const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9zdHJpY21hcmlhbm9AZ21haWwuY29tIiwiaWQiOjE0LCJpYXQiOjE2NzgzNzQ0NzB9.J7uAuxwD5B10uD_ilhGPujLYZYVSC_kSfCTa6UPM6mg"

export default function ToDos() {

  const [newTask, setNewTask] = useState({});
  const [allTasks, setAllTasks] = useState([])

  const handleChange = ({target}) => {
    const {name, value} = target;
    setNewTask((prev)=>({
      ...prev,
      [name]:value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const crearTarea = {
      description: newTask.title,
      complete: false
    }
    const settings = {
      method: 'POST',
      body: JSON.stringify(crearTarea),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'authorization':token,
      }
    }
    fetch(`http://todo-api.ctd.academy:3000/v1/tasks`,settings)
    .then(response => response.json())
    .then(data => console.log(data))
    setNewTask({})
  }
  
  useEffect(()=>{
    const settings = {
      method: 'GET',
      headers: {
        'authorization':token,
      }
    };
    fetch('http://todo-api.ctd.academy:3000/v1/tasks',settings)
    .then(response => response.json())
    .then(data =>{
      console.log(data)
      setAllTasks(data)
    })
  },[])
 
  return (
    <div className='toDo-task'>
      <HeaderToDo />
      <NewTask
        newTask={newTask} 
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <TaskList allTasks={allTasks} />
    </div>
  )
}
