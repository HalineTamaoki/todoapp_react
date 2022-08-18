import React, { useContext, useState } from 'react'
import SaveLocalStorage from '../../util/SaveLocalStorage'
import { ModalContext } from '../../util/ShowModal'
import './style.css'

//This is the content of editing tasks pop-up
function ModalEditTask() {

    const [newNameValue, setnewNameValue] = useState(undefined)
    const { taskDetail } = useContext(ModalContext)

    function handleEditClick(){
//Forbid blank input        
        if(!newNameValue){
            alert("O campo não pode ficar em branco")
        }

//this pop-up ask for a new title for the task. The title is the only thing that can be changed because the complete is just marked        
        else{
            SaveLocalStorage(taskDetail.id, newNameValue, taskDetail.completed, taskDetail.userid, "edit");
//To see the changes immediately, the page reload and close the pop-up
            window.location.reload();
        }
    }
    
  return (
    <div id='edit-task-wrapper'>
        <b>Digite o novo nome da tarefa</b>
        <input onChange={(event) => setnewNameValue(event.target.value)}/>
        <button onClick={handleEditClick}>Salvar</button>
    </div>
  )
}

export default ModalEditTask