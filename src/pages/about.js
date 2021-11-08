import React from 'react'
import Layout from "../components/Layout"
import Spacer from '../components/Spacer'
import TextHeader from '../components/SubComponents/TextHeader'
import ThreeRowText from '../components/SubComponents/ThreeRowText'
import GreeContainer from '../components/Container/GreeContainer'
import WhiteContainer from '../components/Container/WhiteContainer'

const about = () => {
    return <Layout>
        <Spacer height='40px'/>
        <TextHeader/>
        <div className="container-fluid">
        <div className="row">
        <Spacer height='40px'/>
        <GreeContainer left="left"/>
        <WhiteContainer type="progress-type"/>
        </div>
        </div>
        <Spacer height='100px'/>
        <ThreeRowText/>

    </Layout>
}

export default about
