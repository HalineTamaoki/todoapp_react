import React, { createContext, useCallback, useState } from 'react'

export const ModalContext = createContext({
    showModal: false
})

//Manage the pop-ups when called by it context
function ShowModal({children}) {
    const [showModal, setshowModal] = useState(false)
    const [modalType, setmodalType] = useState()
    const [taskDetail, settaskDetail] = useState()

//Make the pop-up appears when called    
    const changeModal = (thisModal, taskDetails) =>{
        setshowModal(true); //show the pop-up
        setmodalType(thisModal) //indicate what type of pop-up must be shown
        settaskDetail(taskDetails) //indicate the task or user for who the actions should be done
    }
    
//Hide the pop-up when clicked on close    
    function hideModal(){
        setshowModal(false)
    }

    const contextValue = {
        changeModal: useCallback((thisModal, taskDetails) => changeModal(thisModal, taskDetails),[]),
        hideModal: useCallback(()=>hideModal(),[]),
        showModal,
        modalType,
        taskDetail
    }
    
    return (
    <ModalContext.Provider value={contextValue}>{children}</ModalContext.Provider>
  )
}

export default ShowModal