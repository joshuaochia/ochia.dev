import * as React from "react"
import GreenContainer from "../components/Container/GreeContainer"
import WhiteContainer from "../components/Container/WhiteContainer"
import Spacer from "../components/Spacer"
import Layout from "../components/Layout"
import FeatureProjects from "../components/SubComponents/FeatureProjects"
import coding from "../images/coding.gif"
import { Helmet } from "react-helmet"

const IndexPage = () => {
  const codingGIF = <img src={coding} className="img-fluid" alt="coding" />

  return (
    <Layout>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <Spacer height="40px" />
      <div className="container-fluid">
        <div className="row">
          <GreenContainer img={codingGIF} type="image-type" left="left" />
          <WhiteContainer type="heading-type" />
        </div>
        <Spacer height="6.25em" />
        <FeatureProjects />
      </div>
    </Layout>
  )
}

export default IndexPage
