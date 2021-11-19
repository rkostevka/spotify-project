import React from 'react';
import styles from '../styles/Player.module.scss'

interface TrackProgressProps {
    left: number;
    right: number;
    // @ts-ignore
    onChange: (e) => void
}

const TrackProgress: React.FC<TrackProgressProps> = ({left, right, onChange}) => {
    return (
        <>
            <input type="range" min={0} max={right} value={left} onChange={onChange}/>
            <div>{left} / {right}</div>
        </>
    );
};

export default TrackProgress;