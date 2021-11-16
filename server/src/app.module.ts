import { Module } from "@nestjs/common";
import { TrackModule } from "./track/track.module";
import { MongooseModule } from '@nestjs/mongoose';


@Module ({
	imports: [
		TrackModule,
		MongooseModule.forRoot('mongodb+srv://root:root@cluster0.wk9im.mongodb.net/Spotify-music?retryWrites=true&w=majority')
	]
})


export class AppModule {

}