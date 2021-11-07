import NavBar from './Setup/NavBar'
import Footer from './Setup/Footer'
import React from 'react'


const Layout = (props) => {
    return (
        <React.Fragment>
            <NavBar/>
            {props.children}
            <Footer/>
        </React.Fragment>
    )
}

export default Layout
