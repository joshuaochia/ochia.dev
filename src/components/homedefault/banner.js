import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from "gatsby-image";
import { FiFacebook } from "react-icons/fi";
import resumePDF from '../../assets/downloads/resume.pdf'
const Banner = () => {
    const banenrQueryData = useStaticQuery (graphql`
        query BannerDefaultQuery {
                homedefaultJson(id: {eq: "main-banner"}) {
                title    
                subtitle
                description
                buttonText
                bgImage {
                    childImageSharp {
                        fluid(quality: 100, maxWidth: 1920, maxHeight: 850) {
                            ...GatsbyImageSharpFluid_withWebp
                            presentationHeight
                            presentationWidth
                        }
                    }
                }
            },
            file(relativePath: {eq: "images/banner/person-image.jpg"}) {
                childImageSharp {
                  fixed (quality: 100, width: 640, height: 750) {
                    ...GatsbyImageSharpFixed
                  }
                }
            }
        }
    `);
    const PortfolioImages = banenrQueryData.file.childImageSharp.fixed;
    const Title = banenrQueryData.homedefaultJson.title;
    const SubTitle = banenrQueryData.homedefaultJson.subtitle;
    const description = banenrQueryData.homedefaultJson.description;
    const buttonText = banenrQueryData.homedefaultJson.buttonText;
    return (
        <div className="rn-slider-area" id="home">
            {/* Start Single Slider  */}
            <div className="rn-slide slider-style-01 banner-fixed-height">
                <div className="wrapper">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="order-2 order-xl-1 col-xl-6 col-lg-12 col-md-12 col-12">
                                <div className="inner mt_lg--40 mt_md--40 mt_sm--40">
                                    <div className="content text-left">
                                        <span className="subtitle theme-color">{SubTitle}</span>
                                        <h1 className="title" dangerouslySetInnerHTML={{ __html: Title }}></h1>
                                        <p>{description}</p>
                                        <a style={{backgroundColor:'#16a34a', color:'white'}} className="rn-button mx-2" href="#contact"><span>Contact Joshua</span></a>
                                        <a className="rn-button mx-2" href={resumePDF} download><span>{buttonText}</span></a>
                                        <ul className="social-icons">
                                            <li><a href="https://www.linkedin.com/in/joshuaochia/"><span>Linkedin</span></a></li>
                                            <li><a href="mailto:joshuacosareochia@example.com"><span>Email</span></a></li>
                                            <li><a href="https://api.whatsapp.com/send?phone=639654002797&text=Hi%20There!"><span>WhatsApp</span></a></li>
                                 
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 order-xl-2 col-xl-6 col-lg-12 col-md-12 col-12 banner-image">
                                <div className="thumbnail">
                                    <div className="thumbnail-inner">
                                        <Img className="portfolio-images img-fluid" fixed={PortfolioImages} />
                                    </div>
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
            {/* End Single Slider  */}
        </div>
    )
}
export default Banner;