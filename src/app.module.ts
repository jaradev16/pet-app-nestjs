import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './posts/posts.module';
import { ConfigModule } from '@nestjs/config';

import { config } from '../ormconfig'


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'developer',
      database: 'netsjs-test',
      synchronize: false,
      retryDelay: 3000,
      autoLoadEntities: true,
      retryAttempts: 10
    }),
    PostsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
