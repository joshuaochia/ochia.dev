import React, {useState , useEffect} from 'react';


const Footer = ({showBelow}) => {
    const [show, setShow] = useState(showBelow ? false : true)

    const handleScroll = () => {
        if (window.pageYOffset > showBelow) {
            if (!show) setShow(true)
        }else {
            if (show) setShow(false)
        }
    }

    useEffect(() => {
        if (showBelow) {
            window.addEventListener(`scroll`, handleScroll)
            return () => window.removeEventListener(`scroll`, handleScroll)
        }
    })

    const handleClick = () => {
        window[`scrollTo`]({top: 0, behavior: `smooth`})
    }

    return (
        <footer style={{backgroundColor:'#16a34a'}} className="rn-footer-area">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner">
                                <h3 className="title">Let’s work together on  <br /> your next project</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div className="copyright ptb--60">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <p className="copyright-text">© {new Date().getFullYear()}, Ochia.dev, LCC. All rights reserved
                               </p>
                            </div>
                            <div className="col-lg-3">
                                <div className="back-to-top">
                                    <div className="backtop" onClick={handleClick}>
                                        <span className="top"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         
        </footer>
    )
}
export default Footer
