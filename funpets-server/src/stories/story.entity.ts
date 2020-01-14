import {
  EntityPartitionKey,
  EntityRowKey,
  EntityString,
  EntityDateTime,
} from '@nestjs/azure-database';

@EntityPartitionKey('stories')
@EntityRowKey('id')
export class Story {
  @EntityString() animal: string;
  @EntityString() description: string;
  @EntityString() imageUrl: string;
  @EntityDateTime() createdAt: Date;

  constructor(story?: Partial<Story>) {
    Object.assign(this, story);
  }
}
