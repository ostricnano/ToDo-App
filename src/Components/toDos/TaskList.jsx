import React from 'react'
import './TaskList.css'

function TaskList({allTasks}) {

  return (
    <div className='taskList'>
        {allTasks.map((task) => (
          <li className='li-taskList' key={task.id}>
            <div>
              <h4 className='description'>{task.description}</h4>
            </div>
            <div className='buttons'>
              <button className='button'>X</button>
              <button className='button'>S</button>
            </div>
          </li>
        ))
        }
    </div>
    
  )
}

export default TaskList