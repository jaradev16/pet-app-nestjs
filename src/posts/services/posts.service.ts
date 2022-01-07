import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreatePostDto } from '../dto/create-post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';
import { Post } from '../entities/post.entity';

@Injectable()
export class PostsService {

  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>
  ){}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    const post: Post = this.postRepository.create(createPostDto)
    return this.postRepository.save(post)
  }

  async findAll(): Promise<Post[]> {
    return this.postRepository.find()
  }

  async findOne(id: number): Promise<Post> {
    const post: Post =  await this.postRepository.findOne(id)
    
    if (!post){
      throw new NotFoundException("Resource not found");
    }

    return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto): Promise<Post> {
    const post: Post = await this.postRepository.findOne(id)
    
    if (!post){
      throw new NotFoundException(`Post not found number id: ${id}`);
    }
    
    await this.postRepository.update(id, updatePostDto)
    return await this.postRepository.findOne(id);
  }

  async remove(id: number): Promise<Post> {
    const post: Post = await this.postRepository.findOne(id)
    await this.postRepository.remove(post)
    return post

  }
}
