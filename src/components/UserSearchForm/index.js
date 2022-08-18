import React, { useState, useContext } from 'react'
import { userSearchContext } from '../../util/ChangeUserList'
import CreateUserList from '../../util/CreateUserList'
import './style.css'

//this is the module where we can search for an specific user
function UserSearchForm() {
  const [userForSearch, setuserForSearch] = useState(undefined)
  const [found, setfound] = useState(true)
  const userList = CreateUserList()

//this allow that the result of the function can be send for other components
  const { changeSearchState } = useContext(userSearchContext)

//When we click on the search button, the search the user
  function handleClickForm(){

    //this try to find the user on the user list
    const exists = userList.find(el => el===parseInt(userForSearch))

    //if the user searched exists, it changes the changeSearch state, sending for it the user that was searched 
    if(exists){
      setfound(true)
      changeSearchState(userForSearch)
    }

    //if the input was empty, it just do nothing (neither search, neither show error message)
    else if(userForSearch===""){
      setfound(true)
      changeSearchState(undefined) //line just to return to the previous state if some user was already searched before
    }

    //this happens if the user id that was put on the input wasn't found on the list
    else{
      setfound(false)
      changeSearchState(undefined)
    }
  }

  return (
    <div id='user-search-wrapper'>
        <div id='user-search-form-wrapper'>
          <input placeholder='Digite o id do usuário' onChange={(event)=>setuserForSearch(event.target.value)}></input>
          <button onClick={handleClickForm}>Buscar</button>
        </div>
{/* this message only will be shown if the user id searched wasn't found*/}
        {found? <></> : <p id='error-in-searching'>Usuário não encontrado</p>}
    </div>
  )
}

export default UserSearchForm