import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Summery from './Summery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Summery></Summery>
            <Contact></Contact>
        </div>
    );
};

export default Home;