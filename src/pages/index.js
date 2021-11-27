import * as React from "react"
import GreenContainer from "../components/Container/GreeContainer"
import WhiteContainer from "../components/Container/WhiteContainer"
import Spacer from "../components/Spacer"
import Layout from "../components/Layout"
import FeatureProjects from "../components/SubComponents/FeatureProjects"
import coding from "../images/coding.webm"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  const codingGIF = (
    <video width="100%" height="450" autoPlay muted loop>
      <source src={coding} type="video/webm" />
    </video>
  )
  const img = (
    <StaticImage
      loading="lazy"
      placeholder="blurred"
      layout="constrained"
      src="../images/personal-pics/ochia.png"
      alt="Joshua Ochia"
    />
  )

  return (
    <Layout>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <Spacer height="40px" />
      <div className="container-fluid">
        <div className="row">
          <GreenContainer img={img} type="image-type" left="left" />
          <WhiteContainer type="heading-type" />
        </div>
        <Spacer height="6.25em" />
        <FeatureProjects />
      </div>
    </Layout>
  )
}

export default IndexPage
