import React from 'react'
import * as classes from './FeatureProjects.module.css'

const FeatureProjects = () => {
    return (
        <section className="feature__projects section--hidden">
        <div className="container">
            <div className="row">
                <div className={`${classes.featureprojects} col-lg-6`}>
                    <div className="title">
                        <h1>Feature Projects</h1>
                    </div>

                    <div className="text-content">
                        <p className="">
                            My mini to large project made by purely hardwork and sweat, navigate to project pages to
                            view the techs I used on this awesome projects!
                            <a href="" className="green"> View more →</a>
                        </p>
                    </div>
                </div>

                <div className="project col-lg-3 col-md-6 col-xs-12">

                    <div className={`card ${classes.mobilecard} ${classes.project1}`}>

                        <div className="card-body">
                            <h4 className="card-title">Recipe App</h4>
                            <hr/>
                            <p className="card-text">Searching for new reciples? Use this app! - You can add new recipes or
                                even bookmark your favorite ones!</p>
                            <a href="#" className="btn btn-green">View Recipe</a>
                        </div>
                    </div>

                </div>
                <div className="project col-lg-3 col-md-6 col-xs-12">

                    <div className={`card ${classes.mobilecard} ${classes.project2}`}>

                        <div className="card-body">
                            <h4 className="card-title">Bank Frontend</h4>
                            <hr/>
                            <p className="card-text">Mock bank account frontend app that you can deposits, transfer, loan, or even
                                withdraw your mock money!</p>
                            <a href="#" className="btn btn-green">View Bank</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    )
}

export default FeatureProjects
