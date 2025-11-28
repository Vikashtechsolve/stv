import React from 'react'
import Layout from '../component/Layout'
import OnlineContestHero from '../component/OnlineContesthero'
import ContestStats from '../component/ContestStats'
import ContestBenefits from '../component/ContestBenefits'
import HowItWorksPage from '../component/HowItWorks'

const OnlineContest = () => {
    return (
        <Layout>
            <OnlineContestHero/>
            <ContestStats/>
            <ContestBenefits/>
            <HowItWorksPage/>
        </Layout>
    )
}

export default OnlineContest;
