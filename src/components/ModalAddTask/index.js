import React, { useContext, useState } from 'react'
import SaveLocalStorage from '../../util/SaveLocalStorage';
import { ModalContext } from '../../util/ShowModal';
import './style.css'

//This is the content of add tasks pop-up
function ModalAddTask() {

    const [newTaskValue, setnewTaskValue] = useState(undefined)
    const { taskDetail } = useContext(ModalContext) //this is used just to say which user the task is from

    function handleAddClick(){
//Forbid blank input        
        if(!newTaskValue){
            alert("O campo não pode ficar em branco")
        }
//send the task that was added to the list        
        else{
            let currentAll = JSON.parse(localStorage.getItem("all"));
            let number = 0;
//create a new id for the task. The new id will always be the id of the last task plus 1
            currentAll.forEach(element => {
                if(element.id>number){
                    number=element.id
                }
            });
//send the new task to be saved. It always send it as incomplete
            SaveLocalStorage(number+1,newTaskValue,false, parseInt(taskDetail.userid), "add")
//To see the changes immediately, the page reload and close the pop-up
            window.location.reload();

        }


    }

  return (
    <div id='add-task-wrapper'>
        <b>Digite o nome da tarefa</b>
        <input placeholder='Nome' onChange={(event)=>setnewTaskValue(event.target.value)}></input>
        <button onClick={handleAddClick}>Salvar</button>
    </div>
  )
}

export default ModalAddTask