import React from 'react'
import {Link} from 'gatsby'
import Image from "../image";
import Img from 'gatsby-image';
import { FiStar } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";

function TestimonialOne({image, title, subtitle, column, description}) {
    let testimonialImg;
    if(image.fixed && typeof image.fixed !== 'function'){
        testimonialImg = <Img fixed={image.fixed} alt={title}/>;
    } else if(image.fluid) {
        testimonialImg = <Image fluid={image.fluid} alt={title}/>
    } else {
        testimonialImg = <img src={image.src} alt={title}/>
    }
    return (
        <div className={column}>
            <div className="testimonial">
                <div style={{backgroundColor:'rgba(217, 252, 232, 0.8)'}} className="quote">
                    <FaQuoteLeft color='#16a34a' />
                </div>
                <ul className="rating">
                    <li><FiStar /></li>
                    <li><FiStar /></li>
                    <li><FiStar /></li>
                    <li><FiStar /></li>
                    <li><FiStar /></li>
                </ul>
                <div className="content">
                    <div className="inner">
                        {description && <p>{description }</p>}
                        <div className="info">
                            <div className="thumbnail">
                                {testimonialImg}
                            </div>
                            <div className="info-details">
                                {title && <h4 className="title">{title}</h4>}
                                {subtitle && <span className="subtitle">{subtitle}</span>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TestimonialOne;
