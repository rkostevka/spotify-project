import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import {Grid, IconButton } from '@mui/material';
import React, { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import styles from '../styles/Player.module.scss'
import { ITrack } from '../types/tracks';
import TrackProgress from './TrackProgress';

let audio: HTMLAudioElement;

const Player: React.FC = () => {
    const {pause, volume, active, currentTime, duration} = useTypedSelector(state => state.player);
    const {pauseTrack, playTrack, setVolume, setActiveTrack, setDuration, setCurrentTime} = useActions();

    useEffect(() => {
        if(!audio) {
            audio = new Audio();
        } else {
            active && setAudio();
        }
    }, [active])

    if(!active) {
        return null;
    }

    const setAudio = () => {
        if(active) {
            audio.src = 'http://localhost:5000/' + active.audio;
            audio.volume = volume / 100;
            audio.onloadedmetadata = () => {
                setDuration(Math.ceil(audio.duration));
            }
            audio.ontimeupdate = () => {
                setCurrentTime(Math.ceil(audio.currentTime));
            }
        }
        play();
    }

    const play = () => {
        if(pause) {
            playTrack();
            audio.play();
        } else {
            pauseTrack();
            audio.pause();
        }
    }

    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.volume = Number(e.target.value) / 100;
        setVolume(Number(e.target.value));
    }

    const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.currentTime = Number(e.target.value);
        setCurrentTime(Number(e.target.value));
    }

    return (
        <div className={styles.player}>
            <IconButton onClick={play}>
                {pause
                    ? <PlayArrow/>
                    : <Pause/>
                }
            </IconButton>
            <div className={styles.playWrap}>
                <Grid container direction="column" className={styles.trackTitle}>
                    <div>{active.name}</div>
                    <div className={styles.artist}>{active.artist}</div>
                </Grid>
                <div className={styles.progressAudio}>
                    <TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime}/>
                </div>
            </div>
            <div className={styles.progressVolume}>
                <VolumeUp />
                <TrackProgress left={volume} right={100} onChange={changeVolume}/>
            </div>
        </div>
    );
};

export default Player;