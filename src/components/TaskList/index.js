import React, { useContext } from 'react'
import TaskWrapper from '../TaskWrapper'
import './style.css'
import { useParams } from "react-router-dom";
import DinamicTask from '../DinamicTask';
import CountCompletedTasks from '../../util/CountCompletedTasks';
import Modal from '../Modal';
import { ModalContext } from '../../util/ShowModal';

//this show the task list for each user based on it params
function TaskList() {
  let  {userid} = useParams();
  const { showModal } = useContext(ModalContext)

  return (
    <CountCompletedTasks>
      <div className='task-page'>
          <h2 id='h2-task-page'>Tarefas</h2>
          <p id='user-id-task-page'>Id do usuário: {userid}</p>
          <DinamicTask userid={userid} />
          <TaskWrapper userid={userid} />
          {showModal?<Modal />:<></>}
      </div>
    </CountCompletedTasks> 
  )
}


export default TaskList