import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import {Grid, IconButton } from '@mui/material';
import React from 'react';
import styles from '../styles/Player.module.scss'
import { ITrack } from '../types/tracks';
import TrackProgress from './TrackProgress';

const Player: React.FC = () => {
    const active = false;
    const track: ITrack = {
        _id: '1',
        name: 'Track 1',
        artist: 'Artist 1',
        text: 'Some text',
        listens: 1,
        audio: 'http://localhost:5000/audio/6a7768c5-41b2-497e-931a-638d48ab196f.mp3',
        picture: 'http://localhost:5000/image/cb9c1119-c4b2-4443-a627-9937988bc32a.jpeg',
        comments: []};
    return (
        <div className={styles.player}>
            <IconButton onClick={(e) => e.stopPropagation()}>
                {active
                    ? <Pause/>
                    : <PlayArrow/>
                }
            </IconButton>
            <div className={styles.playWrap}>
                <Grid container direction="column" className={styles.trackTitle}>
                    <div>{track.name}</div>
                    <div className={styles.artist}>{track.artist}</div>
                </Grid>
                <div className={styles.progressAudio}>
                    <TrackProgress left={0} right={100} onChange={() => {}}/>
                </div>
            </div>
            <div className={styles.progressVolume}>
                <VolumeUp />
                <TrackProgress left={0} right={100} onChange={() => {}}/>
            </div>
        </div>
    );
};

export default Player;