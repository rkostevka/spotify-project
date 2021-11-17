import React from 'react';
import { ITrack } from '../types/tracks';

interface TrackItemProps {
    track: ITrack;
    active?: boolean
}

const TrackItem: React.FC<TrackItemProps> = ({track, active = false}) => {
    return (
        <div>
            {track.name}
        </div>
    );
};

export default TrackItem;