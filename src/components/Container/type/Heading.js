import React from "react"
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"
import * as classes from "../WhiteContainer.module.css"
import { Link } from "gatsby"

function Heading() {
  return (
    <div className={`${classes.wcontainer} col-lg-12 text-center`}>
      <div className={classes.heading}>
        <h1>I'm Joshua Ochia</h1>
      </div>
      <div className={classes.indexsubheading}>
        <p className={classes.indexsubheading}>
          A Full Stack Engineer. My story starts as a virtual assistant for
          shopify stores and executives.
          <Link
            style={{ display: "block" }}
            className="learn-more green"
            to="/about"
          >
            Learn more →
          </Link>
        </p>
      </div>

      <hr className={classes.division} />

      <div className={classes.indexsm}>
        <a href="https://twitter.com/ochia_dev">
          <FaTwitter size={50} />
        </a>
        <a href="https://github.com/joshuaochia">
          <FaGithub size={50} />
        </a>
        <a href="https://www.linkedin.com/in/joshuaochia/">
          <FaLinkedin size={50} />
        </a>
      </div>
    </div>
  )
}

export default Heading
