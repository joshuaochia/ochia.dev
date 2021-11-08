import React, { useState } from 'react'
import { StaticImage } from "gatsby-plugin-image"
import * as classes from './GreenContainer.module.css'


const GreeContainer = (props) => {


    const image =  <StaticImage src="https://placekitten.com/800/600" alt="A kitten" width={200} />

    return (
                <div className={`${classes.gcontainerleft} col-lg-6`}>
                    <div className="col-lg-12">
                        {props.title ? <h2>${props.title}</h2> : ''}
                      
                       {image}
                    </div>
                </div>
    )
}

export default GreeContainer
