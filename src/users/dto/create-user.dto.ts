import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {

    @IsNotEmpty()
    id: number;

    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsString()
    email: string;

    @IsString()
    password: string;

    @IsBoolean()
    isActive?: boolean;
}