export interface Comments {
    _id: string;
    username: string;
    text: string;
}

export interface ITrack {
    _id: string;
    name: string;
    artist: string;
    text: string;
    listens: number;
    picture: string;
    audio: string;
    comments: Comments[]
}