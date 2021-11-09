import React from "react"
import Layout from "../components/Layout"
import Spacer from "../components/Spacer"
import TextHeader from "../components/SubComponents/TextHeader"
import ThreeRowText from "../components/SubComponents/ThreeRowText"
import GreeContainer from "../components/Container/GreeContainer"
import WhiteContainer from "../components/Container/WhiteContainer"
import { StaticImage } from "gatsby-plugin-image"

const header = {
  title: "Where my journey starts?",
  description:
    "My journey starts being a Virtual Assistant for shopify store and executive. Eventually moved into tech industry where I chose to become a Software Engineer. Continuous learning and commitment is my weapon to become a mediocre developer. I always talk about: Paramore, One Piece, Techs, and Manga series!",
}

const img = (
  <StaticImage width={500} src="../images/techiuse.png" alt="A dinosaur" />
)

const about = () => {
  return (
    <Layout>
      <Spacer height="40px" />
      <TextHeader description={header.description} title={header.title} />
      <div className="container-fluid">
        <div className="row">
          <Spacer height="40px" />
          <GreeContainer
            title="Tech I use"
            img={img}
            left="left"
            type="image-type"
          />
          <WhiteContainer type="progress-type" />
        </div>
      </div>
      <Spacer height="100px" />
      <ThreeRowText />
    </Layout>
  )
}

export default about
