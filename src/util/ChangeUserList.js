import React, { createContext, useState, useCallback } from 'react'

//Create the context of witch user was searched if it was searched
export const userSearchContext = createContext({
    userSearched: undefined
})

function ChangeUserList({children}) {
  const [userSearched, setuserSearched] = useState() 

/*when the user is searched, indicate which id was put on the input. 
Here uSearched is just an abbreviation for userSearched */  
const changeSearchState = (uSearched) => {
    setuserSearched(uSearched)
  }

  const contextValue = {
    userSearched,
    changeSearchState: useCallback((uSearched) => {changeSearchState(uSearched)},[])
  }

  return (
    <userSearchContext.Provider value={contextValue}>{children}</userSearchContext.Provider>
  )
}

export default ChangeUserList