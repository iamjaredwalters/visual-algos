import React from 'react';
import { NextPage } from 'next';
import { Bubble } from '../components/Bubble';

const Home: NextPage<{ userAgent: string }> = () => (
    <Bubble items={[5,2,1,3,4]} />
);

Home.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
    return { userAgent };
};

export default Home;
