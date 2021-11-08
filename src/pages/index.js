import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./index.css"
import GreenContainer from '../components/Container/GreeContainer'
import WhiteContainer from '../components/Container/WhiteContainer'
import Spacer from '../components/Spacer'
import Layout from "../components/Layout"
import FeatureProjects from '../components/SubComponents/FeatureProjects'
import Seo from "../components/seo"



const IndexPage = () => {
  return <Layout>
    <Spacer height='40px'/>
    <div className="container-fluid">
    <div className="row">
    <GreenContainer image='gatsby-astronaut.png'/>
    <WhiteContainer></WhiteContainer>
    </div>
    <Spacer height='6.25em'/>
    <FeatureProjects/>
    </div>
   </Layout>
}

export default IndexPage
