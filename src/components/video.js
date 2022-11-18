import React,{useState} from 'react';
import ModalVideo from 'react-modal-video';
import {useStaticQuery, graphql} from 'gatsby';
import BackgroundImage from 'gatsby-background-image';



const Video = () => {
    const videoQueryData = useStaticQuery (graphql`
        query videoQuery {
            homedefaultJson(id: {eq: "videobanner"}) {
                bgImage {
                    childImageSharp {
                        fluid(quality: 100, maxWidth: 1920) {
                            ...GatsbyImageSharpFluid_withWebp
                            presentationHeight
                            presentationWidth
                        }
                    }
                }
            }
        }
    `);
    const [isOpen, setOpen] = useState(false);
    const BgImageCover = videoQueryData.homedefaultJson.bgImage.childImageSharp.fluid;

    return (
        <BackgroundImage fluid={BgImageCover}>
            <div className="video-inner">
                <div className="inner">
                    <div className="icon">
                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="ctsT5Y-InqE" onClose={() => setOpen(false)} />
                        <button className="video-button" onClick={()=> setOpen(true)}><span className="rounded-circle"></span> <span className="video-text">Watch Video</span></button>
                    </div>
                </div>
                
            </div>
        </BackgroundImage>
    )
}
export default Video;
