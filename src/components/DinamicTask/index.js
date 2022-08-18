import React, { useContext, useEffect }  from 'react'
import { CountContext } from '../../util/CountCompletedTasks'
import { ModalContext } from '../../util/ShowModal'
import './style.css'

//this component shows how many tasks is pending and how many is completed, and on the same flex-box, create the button to add new tasks 
function DinamicTask(userid) {
//consumes the context that helps with the count
  const {todoTask, completedTask, countCompletedDefault} = useContext(CountContext)
  useEffect(() => {countCompletedDefault(userid)}, [countCompletedDefault, userid])
  const { changeModal } = useContext(ModalContext)

//when we click on the button, shows the pop-up to add new task  
  function handleAddClick(){
    changeModal("add", userid)
  }

  return (
    <div id='dinamic-task-wrapper'>
        <div>
          <p>Tarefas pendentes: {todoTask}</p>
          <p>Tarefas concluídas: {completedTask}</p> 
        </div>
        <button onClick={handleAddClick}>Adicionar nova tarefa</button>
    </div>
  )
}

export default DinamicTask