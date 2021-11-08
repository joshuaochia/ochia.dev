import React from 'react'
import * as classes from './ThreeRowText.module.css'

const ThreeRowText = () => {
    return (
        <section className="section--hidden">
        <div className="container">
            <div className="three-coloumns">
                <div className="row text-center">
                    <div className={`col-lg-3 offset-lg-1 ${classes['knowme']} ${classes['circleafter']}`}>
                        <h6>
                            How long I've been in Tech industry?
                        </h6>
                        <p className=" pt-3">
                            Short answer: Two years - Long answer: Two long years where I face the monitor screen almost
                            10hrs a
                            day just to learn the techs I'm currently using and leverage it into my personal life and
                            work. Looking to learn new things as I go on this journey!</p>
                    </div>
                    <div className={`col-lg-3 offset-lg-1 ${classes['knowme']} ${classes['circleafter']}`}>
                        <h6>
                            What part of development I'm most comforatble with?
                        </h6>
                        <p className="pt-3">Most comforatble working on Frontend and Backend side of the development as this
                            is my skill focus when I started to learn and work, but not limited to work on DevOps side,
                            please refer to the container above on what techs I uses</p>
                    </div>
                    <div className={`col-lg-3 offset-lg-1 ${classes['knowme']} ${classes['circleafter']}`}>
                        <h6>
                            What is my daily work/operation setup?
                        </h6>
                        <p className="pt-3">I work as a freelancer set up but not limited to 1099 contractor, Employee,
                            etc.. - My
                            setup is always flexible bclassNamese on our agreement in call or email, please don't hesitate to
                            ask me about my availability on working hours or setup! 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default ThreeRowText
