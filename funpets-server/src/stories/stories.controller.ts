import * as path from 'path';
import {
  UseInterceptors,
  Controller,
  Get,
  Param,
  NotFoundException,
  Post,
  Body,
  UploadedFile,
  UnsupportedMediaTypeException,
} from '@nestjs/common';
import {
  AzureStorageFileInterceptor,
  UploadedFileMetadata,
} from '@nestjs/azure-storage';
import { InjectRepository, Repository } from '@nestjs/azure-database';
import { Story } from './story.entity';

// Some cat facts, courtesy of https://catfact.ninja
const funFacts = [
  "Cats have supersonic hearing",
  "On average, cats spend 2/3 of every day sleeping. That means a nine-year-old cat has been awake for only three years of its life.",
  "A cat uses its whiskers for measuring distances. The whiskers of a cat are capable of registering very small changes in air pressure.",
  "A healthy cat has a temperature between 38 and 39 degrees Celcius.",
  "A cat’s jaw can’t move sideways, so a cat can’t chew large chunks of food.","Jaguars are the only big cats that don't roar.",
  "Cats have 'nine lives' thanks to a flexible spine and powerful leg and back muscles",
  "The cat's tail is used to maintain balance.",
  "The technical term for a cat’s hairball is a 'bezoar.'",
  "The first cat show was organized in 1871 in London. Cat shows later became a worldwide craze.",
  "A happy cat holds her tail high and steady.",
  "A cat can jump 5 times as high as it is tall."
];

// File upload restrictions
const maxFileSize = 1024 * 1024 * 2; // 2MB
const allowedExtensions = ['.png', '.jpg', '.jpeg'];
const fileUploadOptions = {
  limits: {
    fileSize: maxFileSize,
  },
  fileFilter: (req, file, cb) => {
    // File extension must match one of the allowed
    const fileExtension = path.extname(file.originalname);
    const acceptFile = allowedExtensions.some(ext => fileExtension === ext);

    if (acceptFile) {
      cb(null, true);
    } else {
      cb(
        new UnsupportedMediaTypeException(
          `Unsupported file type: ${fileExtension}`,
        ),
      );
    }
  },
};

@Controller('stories')
export class StoriesController {
  constructor(
    @InjectRepository(Story)
    private readonly storiesRepository: Repository<Story>,
  ) {}

  @Get('random')
  getRandomStory(): string {
    return funFacts[Math.floor(Math.random() * funFacts.length)];
  }

  @Get(':id')
  async getStory(@Param('id') id): Promise<Story> {
    try {
      return await this.storiesRepository.find(id, new Story());
    } catch (error) {
      // Entity not found
      throw new NotFoundException(error);
    }
  }

  @Get()
  async getStories(): Promise<Story[]> {
    const result = await this.storiesRepository.findAll();
    return result.entries;
  }

  @Post()
  @UseInterceptors(AzureStorageFileInterceptor('file', fileUploadOptions))
  async createStory(
    @Body()
    data: Partial<Story>,
    @UploadedFile()
    file: UploadedFileMetadata,
  ): Promise<Story> {
    const story = new Story(data);
    if (!story.createdAt) {
      story.createdAt = new Date();
    }
    if (file) {
      story.imageUrl = file.storageUrl || null;
    }
    return await this.storiesRepository.create(story);
  }

}
