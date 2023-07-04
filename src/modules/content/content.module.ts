import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CoreModule } from '../core/core.module';

import { PostController } from './controllers';
import { CreatePostDto, UpdatePostDto } from './dtos';
import { PostEntity } from './entities';
import { PostRepository } from './repositories/post.repository';
import { PostService } from './services';

@Module({
    imports: [TypeOrmModule.forFeature([PostEntity]), CoreModule.forRepository([PostRepository])],
    providers: [PostService, CreatePostDto, UpdatePostDto],
    controllers: [PostController],
    exports: [PostService, CoreModule.forRepository([PostRepository])],
})
export class ContentModule {}
