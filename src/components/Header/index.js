import React from 'react'
import './style.css'
import homeImg from './home.png'
import { Link } from 'react-router-dom'

//This header will be used on both pages. It shows for the user witch page the he/she is.

function Header(props) {  
    return (
    <div className='header'>
        <h1>TodoApp</h1>
        
        {/*Depending of the page where the user is, changes the title*/}
        {props.page==="home"? <p>Usuários</p> : <p>Tarefas</p> }  
        
        {/* If the user is looking the tasks, the button "Home appears*/}
        {props.page==="home"? <p id='false-element'></p> : 
          <Link to="/">
            <img src={homeImg} alt='botão voltar para página principal'/> 
          </Link>  
        }
    </div>
  )
}

export default Header