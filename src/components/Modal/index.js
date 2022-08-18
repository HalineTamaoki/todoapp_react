import React, { useContext } from 'react'
import { ModalContext } from '../../util/ShowModal'
import ModalAddTask from '../ModalAddTask'
import ModalDeleteTask from '../ModalDeleteTask'
import ModalEditTask from '../ModalEditTask'
import './style.css'

//Create the pop-up format
function Modal() {
  const { hideModal, modalType } = useContext(ModalContext)

  let type = modalType;

//If the user clicks on "X" button, it closes the pop-up
  function handleCloseClick(){
    hideModal()
  }

  return (
    <div id='modal-wrapper'>
      <span onClick={handleCloseClick} id='modal-close'>&times;</span>
{/* depending of the type of pop-up, it will show the correct content*/}
      {type==="delete"?<ModalDeleteTask />:<></>}
      {type==="edit"?<ModalEditTask />:<></>}
      {type==="add"?<ModalAddTask />:<></>}
    </div>
  )
}

export default Modal