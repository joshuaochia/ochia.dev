import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import TestimonialOne from "../../elements/testimonial/TestimonialOne";

const Testimonial = () => {
    const testimonialQueryData = useStaticQuery(graphql`
        query testimonialQuery {
            allTestimonialJson {
                edges {
                    node {
                        id
                        number
                        title
                        subtitle
                        description
                        image {
                            childImageSharp {
                                fixed(quality: 100, width: 60, height: 60) {
                                    ...GatsbyImageSharpFixed
                                }
                            }
                        }
                    }
                }
            }
        }
    `);
    const testimonialData = testimonialQueryData.allTestimonialJson.edges;

    return (
        <div className="testimonial-area testimonial-style-2 rn-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h3 className="title mb--70 mb_sm--20 mb_md--20">Customers reviews</h3>
                        </div>
                    </div>
                </div>  
                <div className="row">
                    {testimonialData.map(data => (
                        <TestimonialOne 
                            column="col-lg-4 col-md-6 col-12"
                            key={data.node.id} 
                            image={data.node.image.childImageSharp}
                            title={data.node.title}
                            subtitle={data.node.subtitle}
                            description={data.node.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimonial
