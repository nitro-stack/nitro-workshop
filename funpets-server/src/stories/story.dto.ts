import { IsNotEmpty, IsOptional, IsDate, MaxLength } from 'class-validator';

export class StoryDto {
  @IsNotEmpty()
  animal: string;

  @IsOptional()
  @MaxLength(240)
  description: string;

  @IsOptional()
  @IsDate()
  createdAt: Date;
}
