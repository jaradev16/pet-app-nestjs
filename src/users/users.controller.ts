import { Controller, Body, Post } from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';


@Controller('users')
export class UsersContoller{
  constructor(private UsersService: UsersService){}

  @Post()
  createUser(@Body() CreateUserDto: CreateUserDto) {
    return this.UsersService.create(CreateUserDto)
  }

}