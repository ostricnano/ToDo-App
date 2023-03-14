import React from 'react'
import './NewTask.css';

function NewTask({newTask, handleChange, handleSubmit}) {
    
  return (
    <div>
        <form className='toDo-task-form' onSubmit={handleSubmit} action="">
            <input 
                className='todo-task-input'  
                placeholder="To-Do-Task" 
                name='task'
                value={newTask.title || ''}
                onChange={handleChange}
            />
        <button className='add-task-button'>Create Task</button>
      </form>
    </div>
  )
}

export default NewTask