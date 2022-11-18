import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import ProjectOne from "../../elements/project/projectOne";


const Project = () => {
    const portfolioData = useStaticQuery(graphql`
        query portfolioDataQuery {
            homedefaultJson(id: {eq: "portfolio"}) {
            title
            description
            subtitle
            }
        }
    `);
    
    const Title = portfolioData.homedefaultJson.title;
    const subtitle = portfolioData.homedefaultJson.subtitle;
    return (
        <div className="rn-portfolio-area rn-section-gap portfolio-style-1 line-separator" id="portfolio">
            <div className="container">
                <div className="row mb--10">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <span className="subtitle">{subtitle}</span>
                            <h3 className="title"  dangerouslySetInnerHTML={{ __html: Title }}></h3>
                        </div>
                    </div>
                </div>
                <ProjectOne />
                <div className="ror">
                    <div className="col-lg-12">
                        <div className="project-bottom">
                            <p>Did you like what you see above? Don’t hesitate, request for <br /> a new project or contact with me and just say “Hello”. I don’t <br /> bite you</p>
                            <a className="rn-button" href="#contact"><span>Connect with Joshua</span></a>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    )
}
export default Project
