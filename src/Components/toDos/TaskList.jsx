import React from 'react'

function TaskList(allTasks) {

  return (
    <ul>
        {allTasks?.map(task => (
            <li>
                <h3>{task.title}</h3>
            </li>
        ))
        }
    </ul>
  )
}

export default TaskList