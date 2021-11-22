import { Button, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import { ITrack } from '../../types/tracks';
import styles from '../../styles/TrackItem.module.scss';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { useInput } from '../../hooks/useInput';

const TrackPage: React.FC = ({serverTrack}) => {
    const [track, setTrack] = useState<ITrack>(serverTrack);
    const router = useRouter();
    const username = useInput('');
    const text = useInput('');

    const addComment = async () => {
        try {
            const response = await axios.post('http://localhost:5000/tracks/comment', {
                username: username.value,
                text: text.value,
                trackId: track._id
            })
            console.log(response.data);
            setTrack({...track, comments: [...track.comments, response.data]});
        } catch (e) {
            console.log(e);
        }

    }

    return (
        <MainLayout>
            <Button
                variant={"outlined"}
                className="backButton"
                onClick={() => router.push('/tracks')}>
                Back to track list
            </Button>
            <Grid className={styles.trackInfo}>
                <img src={'http://localhost:5000/' + track.picture} alt={track.artist} width={200} height={200}/>
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
                            {...username}
                        />
                        <TextField
                            label="Comment"
                            {...text}
                            fullWidth
                            multiline
                            rows={4}
                        />
                        <Button onClick={addComment}>Send</Button>
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

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const response = await axios.get('http://localhost:5000/tracks/' + params!.id)
    return {
        props: {
            serverTrack: response.data
        }
    }
}