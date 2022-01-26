import { Module } from '@nestjs/common';
import { PostsService } from './services/posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Post } from './entities/post.entity';
import { HealthScore } from './entities/mx-health-score.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post, HealthScore])],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {}
