import React, { createContext, useCallback, useState } from 'react'

//Create a context for storage the api content
export const todoContext = createContext({
    all:[]
})

function TodoProvider({children}) {
//This arr will storage the api content
    const [all, setall] = useState({
        listAll: [],
        loadedAll: false     
    })

//This function consumes the api
    const getAll = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(json => {
            setall({
                listAll: json,
                loadedAll: true
            });  

//Create a localstore for after getting the list easily            
            if(!localStorage.getItem("all")){
                localStorage.setItem("all",JSON.stringify(json))
            }
        })
    }

    const contextValue = {
        getAll: useCallback(()=>getAll(),[]),
        all,
    }

//Provide a value to the context to access the api data from other components            
  return (
    <todoContext.Provider value={contextValue}>{children}</todoContext.Provider>
  )
}

export default TodoProvider