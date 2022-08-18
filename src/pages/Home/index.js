import React from 'react'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import Users from '../../components/Users'
import ChangeUserList from '../../util/ChangeUserList'

/*Create the main structure for the home page. 
Here we also put all home page inside the userSearchContext, that is created on ChangeUserList*/

function Home() {
  return (
    <Layout>
      <ChangeUserList>
        <Header page="home"/>
        <Users />
      </ChangeUserList> 
    </Layout>
  )
}

export default Home