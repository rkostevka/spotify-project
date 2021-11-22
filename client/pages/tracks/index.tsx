import {Box, Button, Card, Grid } from '@mui/material';
import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import {useRouter} from "next/router";
import TrackList from '../../components/TrackList';
import { ITrack } from '../../types/tracks';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import {NextThunkDispatch, wrapper} from "../../store";
import {fetchTracks} from "../../store/actions-creators/track";

const Index = () => {
    const router = useRouter();
    const {tracks, error} = useTypedSelector(state => state.track);

    if(error) {
        return (
            <MainLayout>
                {error}
            </MainLayout>
        )
    }

    return (
        <MainLayout title={"Track list - music platform"}>
            <Grid container justifyContent='center'>
                <Card style={{width: 900}}>
                    <Box p={3}>
                        <Grid container justifyContent='space-between'>
                            Track List
                            <Button onClick={() => router.push('/tracks/create')}>Download track</Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks}/>
                </Card>
            </Grid>
        </MainLayout>
    );
};

export default Index;


export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchTracks())
})