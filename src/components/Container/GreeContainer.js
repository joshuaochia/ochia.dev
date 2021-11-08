import React, { useState } from 'react'
import { StaticImage } from "gatsby-plugin-image"
import * as classes from './GreenContainer.module.css'
import Project from './type/Project'


const GreeContainer = (props) => {

    const { type }  = props
    const image =  <StaticImage src="https://placekitten.com/800/600" alt="A kitten" width={200} />

    const position = props.right || props.left 
    const project = <Project   color="white"/>

    return (
                <div className={`${classes.gcontainer} ${classes[position]} col-lg-6`}>
                    <div className="col-lg-12">
                        {props.title ? <h2>{props.title}</h2> : ''}
                        {type === 'image-type' && image}
                        {type === "project-type" && project}
                    </div>
                </div>
    )
}

export default GreeContainer
