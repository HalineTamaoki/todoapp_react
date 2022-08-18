import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

//Creates the user box and it link to the respective route
function UserElement({userid}) {


  return (
    <div id='user-element-wrapper'>
        <Link to={`/task/${userid}`}><button className='button-user-element'>{userid}</button></Link>
    </div>
  )
}

export default UserElement