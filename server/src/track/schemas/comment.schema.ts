import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Track } from './track.schema';
import * as mongoose from 'mongoose';

export type commentDocument = Comment & Document;

@Schema()
export class Comment {
    @Prop()
    userName: string;

    @Prop()
    text: string;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Track'})
    track: Track;

}

export const CommentSchema = SchemaFactory.createForClass(Comment);