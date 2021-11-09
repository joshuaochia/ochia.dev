import React from "react"
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"
import * as classes from "../WhiteContainer.module.css"

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
          <a style={{ display: "block" }} className="learn-more green" href="">
            Learn more →
          </a>
        </p>
      </div>

      <hr className={classes.division} />

      <div className={classes.indexsm}>
        <a href="">
          <FaTwitter size={50} />
        </a>
        <a href="">
          <FaGithub size={50} />
        </a>
        <a href="">
          <FaLinkedin size={50} />
        </a>
      </div>
    </div>
  )
}

export default Heading
