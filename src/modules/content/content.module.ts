import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CoreModule } from '../core/core.module';

import { PostEntity } from './entities/post.entity';
import { PostRepository } from './repositories/post.repository';

@Module({
    imports: [TypeOrmModule.forFeature([PostEntity]), CoreModule.forRepository([PostRepository])],
    exports: [CoreModule.forRepository([PostRepository])],
})
export class ContentModule {}
