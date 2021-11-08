import React from 'react'
import Layout from "../../components/Layout"
import FeatureProjects from '../../components/SubComponents/FeatureProjects'
import TextHeader from '../../components/SubComponents/TextHeader'
import Spacer from '../../components/Spacer'

const index = () => {
    return <Layout>
        <TextHeader/>
        <Spacer height="200px"/>
        <FeatureProjects/>
    </Layout>
}

export default index
