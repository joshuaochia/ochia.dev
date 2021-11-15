import React from "react"
import Layout from "../../components/Layout"
import FeatureProjects from "../../components/SubComponents/FeatureProjects"
import TextHeader from "../../components/SubComponents/TextHeader"
import Spacer from "../../components/Spacer"
import { Helmet } from "react-helmet"
const header = {
  title: "Coming up soon!",
  description:
    "Didn't have any blogs right now but looking forward to write tons of article and make side money out of it! Check this page again next 6+ months",
}

const index = () => {
  return (
    <Layout>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <TextHeader description={header.description} title={header.title} />
      <Spacer height="200px" />
      <FeatureProjects />
    </Layout>
  )
}

export default React.memo(index)
