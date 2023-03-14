import React,{ useState } from 'react'
import HeaderToDo from './HeaderToDo'
import NewTask from './NewTask';
import TaskList from './TaskList'
import './ToDos.css';

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
    if(!newTask.title) return;
    setAllTasks((prev) => [...prev, newTask])
    setNewTask({})
  }

  return (
    <div className='toDo-task'>
      <HeaderToDo />
      <NewTask
        newTask={newTask} 
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      {/* <TaskList /> */}
    </div>
  )
}
