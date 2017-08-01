import '../../common/template/dependencies'
import React from 'react'

import Header from '../../components/Header'
import SideBar from '../../components/SideBar'
import Footer from '../../components/Footer'
import Routes from '../../routes'

const App = props => (
    <div className='wrapper'>
        <Header />
        <SideBar />
        <div className='content-wrapper'>
            <Routes />
        </div>
        <Footer />
    </div>
)

export default App