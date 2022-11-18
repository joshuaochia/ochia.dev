import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import ServiceOne from "../../elements/service/serviceOne";
import CounterupOne from "../../elements/counterup/counterupOne";

const Service = () => {
    const bgshapeImages = useStaticQuery(graphql`
        query BgshapeImagesQuery {
            file(relativePath: {eq: "bg/bg-image-1.jpg"}) {
                childImageSharp {
                  fluid(quality: 100, maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp
                    presentationHeight
                    presentationWidth
                  }
                }
            },
            homedefaultJson(id: {eq: "skill"}) {
                title
                description
            }
        }
    `);

    const BgshapeImages = bgshapeImages.file.childImageSharp.fluid;
    const Title = bgshapeImages.homedefaultJson.title;
    const Description = bgshapeImages.homedefaultJson.description;
    return (
        <div className="rn-section-gap line-separator">
            {/* Start Service Area  */}
            <div className="rn-service-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title mb--40">
                                <span className="subtitle">What I Do!</span>
                                <h3 className="title"><span>What development I offer</span></h3>
                            </div>
                        </div>
                    </div>
                    <div className="row row--35">
                        <ServiceOne column="col-lg-4 col-md-6 col-12" serviceStyle="service-style-1 mt--30" />
                    </div>
                </div>
            </div>
            {/* End Service Area  */}

            {/* Start Skill Area  */}
            <div className="rn-counterup-area counterup-style-1 rn-section-gapTop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-md-6 col-12">
                            <div className="left-content">
                                <h3 className="title" dangerouslySetInnerHTML={{ __html: Title }}></h3>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--30">
                        <div className="col-lg-8">
                            <CounterupOne />
                        </div>
                    </div>
                </div>
            </div>
            {/* End Skill Area  */}
        </div>
    )
}

export default Service;