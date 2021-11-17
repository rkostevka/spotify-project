import {Box, Button, Card, Grid } from '@mui/material';
import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import {useRouter} from "next/router";
import TrackList from '../../components/TrackList';
import { ITrack } from '../../types/tracks';

const Index = () => {
    const router = useRouter();
    const tracks: ITrack[] = [
        {_id: '1', name: 'Track 1', artist: 'Artist 1', text: 'Some text', listens: 1, audio: 'http://localhost:5000/audio/6a7768c5-41b2-497e-931a-638d48ab196f.mp3', picture: 'http://localhost:5000/image/cb9c1119-c4b2-4443-a627-9937988bc32a.jpeg', comments: []},
        {_id: '2', name: 'Track 2', artist: 'Artist 1', text: 'Some text 2', listens: 1, audio: 'http://localhost:5000/audio/8afee81d-93da-41b7-abe1-e7d92ee50512.mp3', picture: 'http://localhost:5000/image/89253f81-b734-4197-8f56-a3c3e604107a.jpeg', comments: []},
    ]
    return (
        <MainLayout>
            <Grid container justifyContent='center'>
                <Card style={{width: 900}}>
                    <Box p={3}>
                        <Grid container justifyContent='space-between'>
                            <h1>Track List</h1>
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