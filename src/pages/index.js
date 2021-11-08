import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import GreenContainer from '../components/Container/GreeContainer'
import WhiteContainer from '../components/Container/WhiteContainer'
import Spacer from '../components/Spacer'
import Layout from "../components/Layout"
import FeatureProjects from '../components/SubComponents/FeatureProjects'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Seo from "../components/seo"
import "normalize.css"
import "./index.css"



const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
        absolutePath: { regex: "/images/techs/" }
      }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 915, quality: 70) {
              aspectRatio
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
  `)

  const image = getImage(data.image)
  console.log(data);
  return <Layout>
    <Spacer height='40px'/>
    <div className="container-fluid">
    <div className="row">
    
    <GreenContainer type="image-type" left="left" image='gatsby-astronaut.png'/>
    <WhiteContainer type='heading-type' />
    </div>
    <Spacer height='6.25em'/>
    <FeatureProjects/>
    <GatsbyImage image={image}  />
    </div>
    
   </Layout>
}

export default IndexPage
