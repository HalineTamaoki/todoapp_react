import React from 'react'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import TaskList from '../../components/TaskList'
import ShowModal from '../../util/ShowModal'

/*Create the main structure for the home page. 
Here we also put all task page inside the ModalContext, that is created on ShowModal*/

function Tasks() {
  return (
    <Layout>
        <Header page="tasks" />
        <ShowModal>
          <TaskList />
        </ShowModal>  
    </Layout>
  )
}

export default Tasks