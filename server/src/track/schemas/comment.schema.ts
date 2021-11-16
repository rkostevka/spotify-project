import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type commentDocument = Comment & Document;

@Schema()
export class Comment {
    @Prop()
    userName: string;

    @Prop()
    text: string;

}

export const CommentSchema = SchemaFactory.createForClass(Comment);