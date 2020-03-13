import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity('stories')
export class Story {
  @ObjectIdColumn() id: ObjectID;
  @Column() animal: string;
  @Column() description: string;
  @Column() imageUrl: string;
  @Column() createdAt: Date;

  constructor(story?: Partial<Story>) {
    Object.assign(this, story);
  }
}
