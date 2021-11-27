import React from "react"

const Project = props => {
  return (
    <React.Fragment>
      <div className="col-lg-12">
        <h2>{props.title}</h2>
      </div>
      <div className="row pt-2 pl-2">
        <div className="col-lg-8 project-pictures">{props.img}</div>
        <div className=" col-lg-4 project-body pt-5">
          <p className="pt-3">Techs:</p>
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <ul>
                {props.tech1.map(tech => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6 col-sm-6">
              <ul>
                {props.tech2.map(tech => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-12 text-right">
        <h3 className="pt-5">
          <span className="hire-me-arrow">&#10230;</span>
          <a target="_blank" style={{ color: props.color }} href={props.link}>
            View here
          </a>
        </h3>
      </div>
    </React.Fragment>
  )
}

export default Project
