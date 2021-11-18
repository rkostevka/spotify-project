import { Button, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { ITrack } from '../../types/tracks';
import styles from '../../styles/TrackItem.module.scss';

const TrackPage: React.FC = () => {

    const track: ITrack = {
        _id: '1',
        name: 'Track 1',
        artist: 'Artist 1',
        text: 'Some text',
        listens: 1,
        audio: 'http://localhost:5000/audio/6a7768c5-41b2-497e-931a-638d48ab196f.mp3',
        picture: 'http://localhost:5000/image/cb9c1119-c4b2-4443-a627-9937988bc32a.jpeg',
        comments: []};
    const router = useRouter();
    return (
        <MainLayout>
            <Button
                variant={"outlined"}
                className="backButton"
                onClick={() => router.push('/tracks')}>
                Back to track list
            </Button>
            <Grid className={styles.trackInfo}>
                <img src={track.picture} alt={track.artist} width={200} height={200}/>
                <div>
                    <h1>{track.name}</h1>
                    <h3>{track.artist}</h3>
                    <div>{track.listens}</div>
                </div>
            </Grid>
            <div className="textTrack">
                <h3>Text in track</h3>
                <p>{track.text}</p>
            </div>
            <div className="commmentsBox">
                <h1>Comments</h1>
                <div className="commentsForm">
                    <Grid container>
                        <TextField
                            label="Your name"
                            fullWidth
                        />
                        <TextField
                            label="Comment"
                            fullWidth
                            multiline
                            rows={4}
                        />
                        <Button>Send</Button>
                    </Grid>
                </div>
                <div className="comments">
                    {track.comments.map(comment =>
                        <div className="CommentBox">
                            <div>User: {comment.username}</div>
                            <div>Comment: {comment.text}</div>
                        </div>
                    )}
                </div>
            </div>



        </MainLayout>
    );
};

    export default TrackPage;