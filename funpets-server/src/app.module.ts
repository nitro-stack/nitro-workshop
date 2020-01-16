import { Module } from '@nestjs/common';
import { AzureTableStorageModule } from '@nestjs/azure-database';
import { AzureStorageModule } from '@nestjs/azure-storage';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoriesController } from './stories/stories.controller';
import { Story } from './stories/story.entity';

@Module({
  imports: [
    AzureTableStorageModule.forFeature(Story, {
      table: 'stories',
      createTableIfNotExists: true,
    }),
    AzureStorageModule.withConfig({
      sasKey: process.env.AZURE_STORAGE_SAS_KEY,
      accountName: process.env.AZURE_STORAGE_ACCOUNT,
      containerName: 'funpets-images',
    }),
  ],
  controllers: [AppController, StoriesController],
  providers: [AppService],
})
export class AppModule {}
