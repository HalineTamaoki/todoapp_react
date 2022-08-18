import React, { useContext } from 'react'
import './style.css'
import UserSearchForm from '../UserSearchForm'
import UserListDefault from '../UserListDefault'
import { userSearchContext } from '../../util/ChangeUserList'
import UserElement from '../UserElement'

//return the users information at the home page

function Users() {
  const { userSearched } = useContext(userSearchContext)

  return (
      <div className='home-page'>
          <h2>Usuários</h2>
          <UserSearchForm />
          <p id='home-page-p'>Clique no número do id abaixo para ver as tarefas:</p>
{/*if the user search for a specific user id, it shows just the person that was searched */}
          {!userSearched? <UserListDefault /> : <UserElement userid={userSearched}/>}
      </div>
  )
}

export default Users