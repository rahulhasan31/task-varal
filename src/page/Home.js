import React from 'react';
import CardSection from './CardSection';
import ExtraSection from './ExtraSection';
import MIssonSection from './MIssonSection';
import Pricing from './Pricing';
import Testimoni from './Testimoni';
import TopicSection from './TopicSection';

const Home = () => {
    return (
        <div>
         <TopicSection></TopicSection>
         <ExtraSection/>
         <MIssonSection/>
         <Testimoni/>
         <CardSection/>
         <Pricing/>
        </div>
    );
};

export default Home;