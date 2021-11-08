import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import * as classes from './Project.module.css'
import { map } from 'jquery'



const Project = (props) => {
  const image =  <StaticImage className={`col-lg-6 ${classes['projectpic']}`} src="https://placekitten.com/800/600" alt="A kitten" width={500} />

    return (
        <React.Fragment>
         <div className="col-lg-12">
            <h2>Bank Frontend App</h2>
         </div>
         <div className="row pt-2 pl-2">
         <div className="col-lg-8 project-pictures">
            {image}
          </div>
          <div className=" col-lg-4 project-body pt-5">
          
            <p className="pt-3">Techs:</p>
            <div className="row">
            <div className="col-lg-6 col-sm-4" >
            <ul>
              
              <li>Javascript</li>
              <li>HTML</li>
              <li>Bootstrap4</li>
              <li>Jquery</li>
              </ul>
              </div>
              <div className="col-lg-6 col-sm-4">
                <ul>
              <li>Github</li>
              <li>Git</li>
              <li>Css</li>
              <li>Css</li>
              </ul>
              </div>
              </div>
     
           
          </div>
          </div>

          <div className="col-lg-12 text-right">
            <h3><span className="hire-me-arrow">&#10230;</span><a style={{color: props.color}}
            href="https://joshua-ochia-bank-app.netlify.app/"> View here</a></h3>
          </div>
        </React.Fragment>
    )
}

export default Project
