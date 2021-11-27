import React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
import * as classes from "./Footer.module.css"

const Footer = () => {
  return (
    <footer>
      <div className={classes.hireme}>
        <Container>
          <div className="row">
            <div className="col-lg-6">
              <h2>Need a software engineer?</h2>
            </div>
            <div className="col-lg-2">
              <h2>
                <span className={classes.arrow}>&#10230;</span>
              </h2>
            </div>

            <div className="col-lg-4">
              <a id={classes.hirebtn} href="contact">
                Hire me!!
              </a>
            </div>
          </div>
        </Container>
      </div>
      <Container fluid className={`pt-5 ${classes.footersecond}`}>
        <div className="row">
          <div className={`col-lg-3 ${classes.footerbrand}`}>
            <Link to="/">
              <h2>Ochia.dev</h2>
            </Link>
          </div>
          <div className="col-lg-3">
            <h4>Quick Links</h4>
            <ul className={`list-unstyled ${classes.ullist}`}>
              <li>
                {" "}
                <Link to="/about">About</Link>
              </li>
              <li>
                {" "}
                <Link to="/blog">Blogs</Link>
              </li>
              <li>
                {" "}
                <Link to="/projects">Projects</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h4>Social Media</h4>
            <ul className={`list-unstyled ${classes.ullist}`}>
              <li>
                {" "}
                <a target="_blank" href="https://twitter.com/ochia_dev">
                  Twitter
                </a>
              </li>

              <li>
                <a target="_blank" href="https://github.com/joshuaochia">
                  Github
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/joshuaochia/"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 ">
            <h4>Contact</h4>
            <ul className={`list-unstyled ${classes.ullist}`}>
              <li>
                {" "}
                <a href="mailto:joshua@ochia.dev">joshua@ochia.dev</a>
              </li>
              <li>09654002797</li>
              <li>Cagayan De Oro, Philippines</li>
            </ul>
          </div>
        </div>
      </Container>
      <div className="container text-center pt-3">
        <p>&copy; Copyright 2021, Ochia.dev | Created by Joshua Ochia</p>
      </div>
    </footer>
  )
}

export default Footer
