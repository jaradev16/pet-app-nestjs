import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ){}

    async create(createUserDto: CreateUserDto): Promise<User> {
        const user: User = this.userRepository.create(createUserDto);
        return await this.userRepository.save(user);
    }

    async findOne(email: string): Promise<User | undefined> {
        return await this.userRepository.findOne(email);
    }
}
