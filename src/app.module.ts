import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './posts/posts.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'developer',
      database: 'netsjs-test',
      synchronize: false,
      retryDelay: 3000,
      retryAttempts: 10
    }),
    PostsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
