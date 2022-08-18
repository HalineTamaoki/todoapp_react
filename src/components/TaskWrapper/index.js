import React from 'react'
import GetListPerUser from '../../util/GetListPerUser'
import TaskElement from '../TaskElement'
import './style.css'

//this creates the task list of the user based on how many tasks he/she has
function TaskWrapper(userid) {
  const listTasks = GetListPerUser(userid)
  
  return (
    <div>
      {listTasks.map((element)=>(
        <TaskElement 
          key={element.id}
          userid = {element.userId}
          id = {element.id}
          title={element.title}
          completed = {element.completed}
        />
      ))}
    </div>
  )
}

export default TaskWrapper