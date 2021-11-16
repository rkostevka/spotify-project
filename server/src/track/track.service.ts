import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Track, trackDocument } from "./schemas/track.schema";
import { Comment, commentDocument } from "./schemas/comment.schema";

@Injectable()
export class TrackService {

    constructor(@InjectModel(Track.name) private trackModel: Model<trackDocument>,
                @InjectModel(Comment.name) private crackModel: Model<commentDocument>) {}

    async create() {

    }
    async getAll() {

    }

    async getOne() {

    }
    async delete() {

    }
}