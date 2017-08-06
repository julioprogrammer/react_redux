import '../../common/template/dependencies'
import React from 'react'

import Header from '../../components/Header'
import SideBar from '../../components/SideBar'
import Footer from '../../components/Footer'
import Routes from '../../routes'
import Messages from '../../common/template/msg'

const App = props => (
    <div className='wrapper'>
        <Header />
        <SideBar />
        <div className='content-wrapper'>
            <Routes />
        </div>
        <Footer />
        <Messages />
    </div>
)

export default App