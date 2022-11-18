import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Banner from "../components/homedefault/banner";
import Skill from "../components/homedefault/skill";
import Service from "../components/homedefault/service";
import Project from "../components/homedefault/project";
import Testimonial from "../components/homedefault/testimonial";
import Brand from "../components/homedefault/brand";
import Techs from "../elements/Techs";
import Video from "../components/video";
import BlogPost from "../components/blogPost";
import Contact from "../elements/contact/contact";

const IndexPage = () => (
  <Layout>
    <SEO title="Ochia.dev" />
    <Banner />
    <Techs />
    <Service />
  
    <Project />
    <Skill />
    <Testimonial />
    {/* <Video /> */}
    {/* <BlogPost /> */}
    <Contact />
    {/* <Brand /> */}
  </Layout>
)
export default IndexPage;