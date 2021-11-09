import React from "react"
import * as classes from "./GreenContainer.module.css"
import Project from "./type/Project"

const GreeContainer = props => {
  const { type, data } = props
  const position = props.right || props.left

  return (
    <div className={`${classes.gcontainer} ${classes[position]} col-lg-6 mt-5`}>
      <div className="col-lg-12">
        {props.title ? <h2>{props.title}</h2> : ""}
        {type === "image-type" && props.img}
        {type === "project-type" && (
          <Project
            key={data.id}
            title={data.title}
            tech1={data.tech1}
            tech2={data.tech2}
            link={data.link}
            color="white"
            img={data.img}
          />
        )}
      </div>
    </div>
  )
}

export default GreeContainer
