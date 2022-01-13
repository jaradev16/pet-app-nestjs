import { IsNotEmpty, IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreatePostDto {

  @IsNumber()
  id?: number;

  @IsNotEmpty()
  @IsString()
  title: string

  @IsNotEmpty()
  @IsString()
  description: string

  @IsNotEmpty()
  @IsString()
  content: string

  @IsBoolean()
  isPublished?: boolean;

}
