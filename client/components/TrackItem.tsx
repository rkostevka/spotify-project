import { Card, Grid, IconButton } from '@mui/material';
import React from 'react';
import { ITrack } from '../types/tracks';
import styles from '../styles/TrackItem.module.scss';
import {Delete, Pause, PlayArrow } from '@mui/icons-material';

interface TrackItemProps {
    track: ITrack;
    active?: boolean
}

const TrackItem: React.FC<TrackItemProps> = ({track, active = false}) => {
    return (
        <Card className={styles.track}>
            <IconButton>
                {active
                    ? <Pause/>
                    : <PlayArrow/>
                }
            </IconButton>
            <img width={70} height={70} src={track.picture} />
            <Grid container direction="column" className={styles.trackTitle}>
                <div>{track.name}</div>
                <div className={styles.artist}>{track.artist}</div>
            </Grid>
            <div className={styles.rightBlock}>
                {active && <div>02:42 / 03:22</div>}
                <IconButton>
                    <Delete />
                </IconButton>
            </div>

        </Card>
    );
};

export default TrackItem;