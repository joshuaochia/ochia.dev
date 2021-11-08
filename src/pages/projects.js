import React from 'react'
import Layout from "../components/Layout"
import AboutMyWork from '../components/SubComponents/AboutMyWork'
import GreeContainer from '../components/Container/GreeContainer'
import WhiteContainer from '../components/Container/WhiteContainer'
import TextHeader from '../components/SubComponents/TextHeader'
import Spacer from '../components/Spacer'

const projects = () => {
    return <Layout>
        <Spacer height="40px"/>
        <TextHeader/>
        <Spacer height="40px"/>
        <div className="container-fluid  col-lg-12">
            <div className="row">
                <GreeContainer left="left" type="project-type"/>
                <WhiteContainer  type="project-type"/>
            </div>
        </div>
        <Spacer height="100px"/>
        <AboutMyWork/>
    </Layout>
}

export default projects
