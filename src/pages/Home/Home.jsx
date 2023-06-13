import React from 'react';
import { Helmet } from 'react-helmet';
import Background from './Background';
import Facilities from './Facilities';
import About from './About';
import AllClasses from './AllClasses';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Background></Background>
            <Facilities></Facilities>
            <AllClasses></AllClasses>
            <About></About>
        </>
    );
};

export default Home;