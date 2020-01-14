import { Module } from '@nestjs/common';
import { AzureTableStorageModule } from '@nestjs/azure-database';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoriesController } from './stories/stories.controller';
import { Story } from './stories/story.entity';

@Module({
  imports: [
    AzureTableStorageModule.forFeature(Story, {
      table: 'stories',
      createTableIfNotExists: true,
    })
  ],
  controllers: [AppController, StoriesController],
  providers: [AppService],
})
export class AppModule {}
