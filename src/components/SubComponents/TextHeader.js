import React from 'react'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const TextHeader = () => {
    return (
        <section id="header" className="section--hidden">
        <div className="container">
            <div className="global-header">
                <div className="row">
                    <div className="col-lg-6">
                        <h1>Where my journey starts?</h1>
                    </div>
                    <div className="col-lg-6">
                        <div className="social-media-global">
                            <a href="https://twitter.com/ochia_dev"><FaTwitter size={50}/></a>
                            <a href="https://github.com/joshuaochia"><FaGithub size={50}/></a>
                            <a href="https://www.linkedin.com/in/joshuaochia/"><FaLinkedin size={50}/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="global-sub-heading">
                <p>My journey starts being a <span className="green">Virtual Assistant</span> for shopify store and
                    executive.
                    Eventually moved into tech industry where I chose to become a <span className="green">Software
                        Engineer.</span>
                    Continuous learning and commitment is my weapon to become a mediocre developer. <span
                        className="green">I
                        always talk about: </span> Paramore, One Piece, Techs, and Manga series!</p>
            </div>
        </div>
    </section>
    )
}

export default TextHeader
