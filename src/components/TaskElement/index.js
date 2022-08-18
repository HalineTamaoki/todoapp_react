import React, { useState, useEffect, useContext } from 'react'
import './style.css'
import deleteIcon from './delete.png'
import editIcon from './edit.png'
import SaveLocalStorage from '../../util/SaveLocalStorage'
import { CountContext } from '../../util/CountCompletedTasks'
import { ModalContext } from '../../util/ShowModal'

//This component create each task element
function TaskElement({id, title , completed, userid}) {

    const [dashed, setdashed] = useState() //state to dash completed tasks
    const { completedTask, todoTask, changeTaskToComplete, changeTaskToIncomplete } = useContext(CountContext) //help change the numbers of tasks pending and completed when marked as completed
    let atualCompleted = completedTask; //idem
    let atualTodo = todoTask; //idem
    const { changeModal } = useContext(ModalContext) //used when clicked on edit and delete buttons

    //indicates the informations about this task
    const thisTaskElement = {
        id: id,
        title: title,
        completed: completed,
        userid:userid
    }

    //by default, every task that is completed must be dashed
    useEffect(() => {
        if(completed){
        setdashed('dash-label')}
    }, [completed])
    
//handle the checkmark    
    function handleChangeCheck (event){   
        if (event.target.checked){
            SaveLocalStorage(id, title, true ,userid, "complete" ) //saves on local storage when the task is marked as completed
            changeTaskToComplete(atualCompleted, atualTodo) //change the number of completed and incompleted tasks
            setdashed ('dash-label');}//dash the completed task
        else{
            SaveLocalStorage(id, title, false ,userid, "complete" )//saves on local storage when the task is marked as incompleted
            changeTaskToIncomplete(atualCompleted, atualTodo)//change the number of completed and incompleted tasks
            setdashed() //remove dash from the incompleted task
        }
    }

//handle the delete button   
    function handleButtonDelete(){
        changeModal('delete', thisTaskElement)
    }

//handle the edit button
    function handleButtonEdit(){
        changeModal('edit', thisTaskElement)
    }

  return (
    <div id='task-element-wrapper'>
        <label className='chechbox-container'>
            <span className={dashed}>{title}</span>
            <input type="checkbox" name='completeTask' onChange={handleChangeCheck} defaultChecked={completed}></input>
            <span className='checkmark'></span>
        </label>
        <div id='task-button'>
            <button onClick={handleButtonEdit}><img alt='edit' src={editIcon}></img></button>
            <button onClick={handleButtonDelete}><img alt='delete' src={deleteIcon}></img></button>
        </div>
    </div>
  )
}

export default TaskElement