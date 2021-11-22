import {Button, Grid, TextField } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import FileUpload from '../../components/FileUpload';
import StepWrapper from '../../components/StepWrapper';
import { useInput } from '../../hooks/useInput';
import MainLayout from '../../layouts/MainLayout';
import styles from '../../styles/StepWrapper.module.scss';

const Create = () => {
    const [activeStep, setActiveStep] = useState(0)
    const [picture, setPicture] = useState(null)
    const [audio, setAudio] = useState(null)
    const name = useInput('')
    const artist = useInput('')
    const text = useInput('')
    const router = useRouter()
    const next = () => {
        if(activeStep === 0) {
            setActiveStep(prev => prev + 1);


        } else if(activeStep === 1) {
            setActiveStep(prev => prev + 1);
        } else {
            const formData = new FormData();
            formData.append('name', name.value);
            formData.append('artist', artist.value);
            formData.append('text', text.value);
            formData.append('picture', picture);
            formData.append('audio', audio);
            setActiveStep(prev => prev + 1);
            axios.post('http://localhost:5000/tracks', formData)
                .then(resp => router.push('/tracks'))
                .catch(e => console.log(e))
        }
    }

    const back = () => {
        setActiveStep(prev => prev - 1);
        console.log("BACK:  " + activeStep)
    }

    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 &&
                    <Grid container direction={"column"}>
                        <TextField {...name} label={"Track title"} className={styles.stepTextField}/>
                        <TextField {...artist} label={"Artist name"} className={styles.stepTextField}/>
                        <TextField
                            {...text}
                            label={"Text of track"}
                            className={styles.stepTextField}
                            multiline
                            rows={3}
                        />
                    </Grid>
                }
                {activeStep === 1 &&
                    <FileUpload setFile={setPicture} accept={'image/*'}>
                        <Button>Download cover of track</Button>
                    </FileUpload>
                }
                {activeStep === 2 &&
                    <FileUpload setFile={setAudio} accept={'audio/*'}>
                        <Button>Download track</Button>
                    </FileUpload>
                }
            </StepWrapper>
            <Grid container justifyContent="space-between">
                <Button disabled={activeStep === 0} onClick={back}>Назад</Button>
                <Button disabled={activeStep > 2} onClick={next}>Далее</Button>
            </Grid>
        </MainLayout>
    );
};

export default Create;