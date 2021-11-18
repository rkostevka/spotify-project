import {Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import FileUpload from '../../components/FileUpload';
import StepWrapper from '../../components/StepWrapper';
import MainLayout from '../../layouts/MainLayout';
import styles from '../../styles/StepWrapper.module.scss';

const Create = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [picture, setPicture] =useState(null);
    const [audio, setAudio] = useState(null);
    const next = () => {
        if(activeStep !== 2) {
            setActiveStep(prev => prev + 1);
        }
    }

    const back = () => {
        setActiveStep(prev => prev - 1);
    }

    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>
                {activeStep == 0 &&
                    <Grid container direction={"column"}>
                        <TextField label={"Track title"} className={styles.stepTextField}/>
                        <TextField label={"Artist name"} className={styles.stepTextField}/>
                        <TextField
                            label={"Text of track"}
                            className={styles.stepTextField}
                            multiline
                            rows={3}
                        />
                    </Grid>
                }
                {activeStep == 1 &&
                    <FileUpload setFile={setPicture} accept={'image/*'}>
                        <Button>Download cover of track</Button>
                    </FileUpload>
                }
                {activeStep == 2 &&
                    <FileUpload setFile={setAudio} accept={'audio/*'}>
                        <Button>Download track</Button>
                    </FileUpload>
                }
            </StepWrapper>
            <Grid container justifyContent="space-between">
                <Button onClick={back}>Back</Button>
                <Button onClick={next}>Next</Button>
            </Grid>
        </MainLayout>
    );
};

export default Create;