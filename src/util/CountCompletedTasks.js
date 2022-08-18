import React, { createContext, useCallback, useState } from 'react'
import GetListPerUser from './GetListPerUser';

export const CountContext = createContext({
    completedTask: 0,
    todoTask: 0
})

//helps to count the number of completed and pending tasks
function CountCompletedTasks({children}) {
        const [completedTask, setcompletedTask] = useState(0)
        const [todoTask, settodoTask] = useState(0)
  
//this is loaded by default        
    function countCompletedDefault(userid){
        const list = GetListPerUser(userid)
        
        let completedAux = 0
        let todoAux = 0

        list.forEach(element => {
        if(element.completed){
            completedAux++
        }
        else{
            todoAux++
        }
        });

        setcompletedTask(completedAux);
        settodoTask(todoAux);

    }

//when a task is set as completed, it changes the number of pending and completed tasks
    function changeTaskToComplete(atualCompleted, atualTodo){
        setcompletedTask(atualCompleted + 1)
        settodoTask(atualTodo - 1)
    }

//when a task is set as incompleted, it changes the number of pending and completed tasks
    function changeTaskToIncomplete(atualCompleted, atualTodo){
        setcompletedTask(atualCompleted - 1)
        settodoTask(atualTodo + 1)
    }

    const contextValue={
        todoTask,
        completedTask,
        countCompletedDefault: useCallback((userid)=>countCompletedDefault(userid),[]),
        changeTaskToComplete: useCallback((atualCompleted, atualTodo)=>changeTaskToComplete(atualCompleted, atualTodo),[]),
        changeTaskToIncomplete: useCallback((atualCompleted, atualTodo)=>changeTaskToIncomplete(atualCompleted, atualTodo),[]),
    }

  return (
    <CountContext.Provider value={contextValue}>{children}</CountContext.Provider>
  )
}

export default CountCompletedTasks