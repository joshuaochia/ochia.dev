import React from 'react'
import Heading from './type/Heading'
import Progress from './type/Progress'
import Project from './type/Project'
import * as classes from './WhiteContainer.module.css'


const WhiteContainer = (props) => {

    const { type } = props


    return (
      <React.Fragment>
        <div className={`${classes.wcontainer}  col-lg-6`}>
        <div className="col-lg-12">
        {type === 'heading-type' && <Heading/>}
        {type === 'progress-type' && <Progress/>}
        {type === 'project-type' && <Project color="black"/>}
        </div>
        </div>
        </React.Fragment>
      
    )
}

export default WhiteContainer
