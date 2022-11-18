import { graphql, useStaticQuery } from 'gatsby'
import React from 'react';
import { FiMapPin, FiPhone, FiGlobe, FiTwitter,FiFacebook, FiInstagram, FiPhoneIncoming } from "react-icons/fi";
import Contactform from "./contactform";


const Contact = () => {
    const contactData = useStaticQuery(graphql`
        query contactDataQuery {
            homedefaultJson(id: {eq: "contactus"}) {
                title
                subtitle
            }
            site {
                siteMetadata {
                    getform_url
                }
            }

        }
    `);
    const Title = contactData.homedefaultJson.title;
    const Description = contactData.homedefaultJson.subtitle;
    const { site: { siteMetadata: { getform_url } } } = contactData;
    return (
        <div className="rn-contact-area rn-section-gapBottom" id="contact"> 
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title mb--60">
                            <span className="subtitle">Contact</span>
                            <h3 className="title" dangerouslySetInnerHTML={{ __html: Title }}></h3>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {/* Start Contact Form  */}
                    <div className="col-lg-12 col-12">
                        <Contactform url={getform_url} />
                    </div>
                    {/* End Contact Form  */}
                </div>
                <div className="row rn-section-gapTop">

                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="contact-info">
                            <p>Whatsapp</p>
                            <h3 className="title"><a href="tel:+770221770505">+63 965 400 2797</a></h3>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-6 col-12 mt_mobile--30">
                        <div className="contact-info">
                            <p>Email</p>
                            <h3 className="title"><a href="mailto:example@gmail.com">joshuacosareochia@gmail.com</a></h3>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-6 col-12 mt_sm--30">
                        <div className="contact-info">
                            <p>Address</p>
                            <h3 className="title">Cagayan de Oro City, Philippines</h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact
