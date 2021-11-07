import React from 'react'
import { Navbar, Button, Container, Nav } from 'react-bootstrap'
import * as classes from './Nav.module.css'



const NavBar = () => {

    return (
        <Navbar className={classes.nav} bg="white" expand="lg">

        <Container>

        <Navbar.Brand className={classes.navbrand} >
                <h1 >Ochia.dev</h1>
        </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className={`${classes.navbar} mx-auto`}>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>
                <Nav.Link href="/projects">Projects</Nav.Link>
                <Nav.Link id={classes.contact} href="#home">Let's Talk</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}


export default NavBar
