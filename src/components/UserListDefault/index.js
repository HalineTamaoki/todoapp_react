import React from 'react'
import CreateUserList from '../../util/CreateUserList'
import './style.css'
import UserElement from '../UserElement'

//this is the default view of users
function UserListDefault() {

//it get the list of all users that will be displayed
  const userList = CreateUserList()

  return (
    <div id='user-list-wrapper'>
{/*Creates a box (UserElement) for each user on the list*/}
        {userList.map((element) => (
          <UserElement 
              key = {element}
              userid={element}/>   
        ))}
    </div>
  )
}

export default UserListDefault