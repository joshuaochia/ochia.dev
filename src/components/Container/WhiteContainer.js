import React from "react"
import Heading from "./type/Heading"
import Progress from "./type/Progress"
import Project from "./type/Project"
import * as classes from "./WhiteContainer.module.css"

const WhiteContainer = props => {
  const { type, data } = props

  return (
    <React.Fragment>
      <div className={`${classes.wcontainer} col-lg-6 mt-5`}>
        <div className="col-lg-12">
          {type === "heading-type" && <Heading />}
          {type === "progress-type" && <Progress />}
          {type === "project-type" && (
            <Project
              key={data.id}
              title={data.title}
              tech1={data.tech1}
              tech2={data.tech2}
              link={data.link}
              color="black"
              img={data.img}
            />
          )}
        </div>
      </div>
    </React.Fragment>
  )
}

export default WhiteContainer
