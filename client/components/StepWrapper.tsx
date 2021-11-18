import {Card, Container, Grid, Step, StepLabel, Stepper } from '@mui/material';
import React from 'react';
import style from '../styles/StepWrapper.module.scss';

interface StepWrapperProps {
    activeStep: number
}
const steps = ['Info about track', 'Download cover album', 'Download track']

const StepWrapper: React.FC<StepWrapperProps> = ({activeStep, children}) => {
    return (
        <Container>
            <Stepper activeStep={activeStep}>
                {steps.map((step, index) =>
                    <Step
                        key={index}
                        completed={activeStep > index}
                    >
                        <StepLabel>{step}</StepLabel>
                    </Step>
                )}
            </Stepper>
            <Grid container justifyContent="center" className={style.stepWrapper}>
                <Card className={style.stepCard}>
                    {children}
                </Card>
            </Grid>
        </Container>
    );
};

export default StepWrapper;