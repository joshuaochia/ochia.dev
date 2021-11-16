import React from "react"
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"
import Spacer from "../Spacer"
const TextHeader = props => {
  return (
    <section id="header">
      <Spacer height="50px"/>
      <div className="container">
        <div className="global-header">
          <div className="row">
            <div className="col-lg-6">
              <h1>{props.title}</h1>
            </div>
            <div className="col-lg-6">
              <div className="social-media-global">
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
          </div>
        </div>
        <div className="global-sub-heading">
          <p>
            {props.description}
            <span className="green">{props.green} </span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default TextHeader
