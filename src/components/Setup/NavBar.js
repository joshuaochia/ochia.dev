import React from "react"
import { Link } from "gatsby"
import { Navbar, Container, Nav } from "react-bootstrap"
import * as classes from "./Nav.module.css"

const NavBar = () => {
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand>
          <h1>
            <Link to="/" className={classes.navbrand}>
              Ochia.dev
            </Link>
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`${classes.navbar} mx-auto`}>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link id={classes.contact} href="/contact">
              Let's Talk
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
