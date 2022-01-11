import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePostDto {

    @IsNotEmpty()
    id: number

    @IsNotEmpty()
    @IsString()
    title: string

    @IsNotEmpty()
    @IsString()
    description: string

    @IsNotEmpty()
    @IsString()
    content: string

}
