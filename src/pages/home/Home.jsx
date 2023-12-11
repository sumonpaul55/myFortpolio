import { Box, Container } from '@mui/material';
import React from 'react';
import Banner from './Banner';
// import MyHelmet from '../../components/MyHelmet';m 

const Home = () => {
    return (
        <>
            <main className='py-2'>
                <Container>
                    <Box>
                        <Banner></Banner>
                    </Box>
                </Container>
            </main>
        </>
    );
};

export default Home;