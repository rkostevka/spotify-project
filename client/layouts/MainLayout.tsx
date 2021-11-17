import { Container } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar';

const MainLayout: React.FC = ({children}) => {
    return (
        <>
            <Navbar />
            <Container style={{marginTop: '90px'}}>
                {children}
            </Container>

        </>
    );
};

export default MainLayout;