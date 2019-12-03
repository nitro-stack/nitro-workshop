import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoriesController } from './stories/stories.controller';

@Module({
  imports: [],
  controllers: [AppController, StoriesController],
  providers: [AppService],
})
export class AppModule {}
