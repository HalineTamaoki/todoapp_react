import React, { useContext } from 'react'
import SaveLocalStorage from '../../util/SaveLocalStorage'
import { ModalContext } from '../../util/ShowModal'
import './style.css'

//This is the content of delete task pop-up. On this pop-up we ask for a confirmation before the task is removed
function ModalDeleteTask() {
  
  const { hideModal, taskDetail } = useContext(ModalContext)
  
//if the user choose to not delete the task, the pop-up just close and nothing happens  
  function handleConfirmNo(){
    hideModal()
    }

//if the user choose to delete the task, it removes the task from local storage and the page is reloaded to reflect the changes and close the pop-up    
  function handleConfirmYes(){
    SaveLocalStorage(taskDetail.id, taskDetail.title, taskDetail.completed, taskDetail.userid, "delete")
    window.location.reload();
  }
    
  return (
    <div id='delete-task-wrapper'>
        <p>Você deseja mesmo excluir essa tarefa?</p> 
        <div>
            <button onClick={handleConfirmYes}>Sim</button>
            <button onClick={handleConfirmNo}>Não</button>
        </div>   
    </div>
  )
}

export default ModalDeleteTask