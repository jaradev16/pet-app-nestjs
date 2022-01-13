import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './posts/posts.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';


@Module({
  imports: [
    ConfigModule.forRoot({
        envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT as string),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: false,
      retryDelay: 3000,
      retryAttempts: 10,
      
    }),
    PostsModule,
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
