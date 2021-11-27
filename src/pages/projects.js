import React from "react"
import Layout from "../components/Layout"
import AboutMyWork from "../components/SubComponents/AboutMyWork"
import GreeContainer from "../components/Container/GreeContainer"
import WhiteContainer from "../components/Container/WhiteContainer"
import TextHeader from "../components/SubComponents/TextHeader"
import Spacer from "../components/Spacer"
import bank from "../images/projects/bank.webm"
import mapty from "../images/projects/mapty.webm"
import recipeFE from "../images/projects/recipefrontend.webm"
import recipeAPI from "../images/projects/recipeapi.webm"
import { Helmet } from "react-helmet"

const header = {
  title: "What i've built?",
  description:
    "The apps listed below are the proof of my skillsets and fruits of hardwork learning different techs & languages from past few years. This list if short - please refer on my github account to get the other available apps or the other projects are private due to client agreements and confidentiality. Please contact me if you need more work or client references!",
}
const BANK = {
  img: (
    <video width="100%" height="240" autoPlay muted loop>
      <source src={bank} type="video/webm" />
    </video>
  ),
  id: "01",
  title: "Bank Frontend App",
  tech1: ["Javascript", "HTML", "Bootstrap4", "Jquery"],
  tech2: ["Github", "Git", "CSS"],
  link: "https://joshua-ochia-bank-app.netlify.app/",
}
const MAPTY = {
  img: (
    <video width="100%" height="240" autoPlay muted loop>
      <source src={mapty} type="video/webm" />
    </video>
  ),
  id: "02",
  title: "Mapty Website",
  tech1: ["Javascript", "HTML", "Bootstrap4", "Jquery"],
  tech2: ["Github", "Git", "CSS", "REST API"],
  link: "https://mapty-joshua-ochia.netlify.app/",
}
const RECIPEAPI = {
  img: (
    <video width="100%" height="240" autoPlay muted loop>
      <source src={recipeAPI} type="video/webm" />
    </video>
  ),
  id: "03",
  title: "Recipe Backend API",
  tech1: ["Django", "DRF", "Docker", "POSTGRESQL"],
  tech2: ["Github", "Git", "Flake8"],
  link: "https://github.com/joshuaochia/recipe-app-api",
}
const RECIPEFE = {
  img: (
    <video width="100%" height="240" autoPlay muted loop>
      <source src={recipeFE} type="video/webm" />
    </video>
  ),
  id: "04",
  title: "Recipe Frontend App",
  tech1: ["Javascript", "HTML", "Bootstrap4", "Jquery"],
  tech2: ["Github", "Git", "CSS"],
  link: "https://github.com/joshuaochia/recipe-api-fullapp",
}

const Projects = () => {
  return (
    <Layout>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Spacer height="40px" />
      <TextHeader description={header.description} title={header.title} />
      <Spacer height="40px" />
      <div className="container-fluid col-lg-12">
        <div className="row">
          <GreeContainer data={BANK} left="left" type="project-type" />
          <WhiteContainer data={RECIPEFE} type="project-type" />
        </div>
        <Spacer height="100px" />
        <div className="row">
          <WhiteContainer data={RECIPEAPI} type="project-type" />
          <GreeContainer data={MAPTY} right="right" type="project-type" />
        </div>
      </div>
      <Spacer height="100px" />
      <AboutMyWork />
    </Layout>
  )
}

//

export default React.memo(Projects)
