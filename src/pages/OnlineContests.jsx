import React from 'react'
import Navbar from '../component/Navbar'
import Layout from '../component/Layout'
import OnlineContesthero from '../component/OnlineContesthero'
import HowItWorksPage from '../component/HowItWorks'
const OnlineContest = () => {
    return (
        <Layout>
       <OnlineContesthero/>
       <HowItWorksPage/>
        </Layout>
    )
}
export default OnlineContest;