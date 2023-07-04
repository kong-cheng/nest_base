import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    ValidationPipe,
} from '@nestjs/common';

import { CreatePostDto, UpdatePostDto } from '../dtos';
import { PostService } from '../services';

@Controller('posts')
export class PostController {
    constructor(protected postService: PostService) {}

    /**
     * @description 查询文章列表
     */
    @Get()
    async index() {
        return this.postService.findList();
    }

    /**
     * @description 查看文章详情
     * @param {number} id 文章ID
     */
    @Get(':id')
    async findOne(@Param('id', new ParseIntPipe()) id: number) {
        return this.postService.findOne(id);
    }

    /**
     * @description 插入文章
     * @param {CreatePostDto} data 文章数据
     */
    @Post()
    async create(
        @Body(
            new ValidationPipe({
                transform: true,
                forbidUnknownValues: true,
                validationError: { target: true },
                groups: ['create'],
            }),
        )
        data: CreatePostDto,
    ) {
        return this.postService.create(data);
    }

    /**
     * @description 更新文章
     * @param {UpdatePostDto} data 文章数据
     */
    @Patch()
    async update(
        @Body(
            new ValidationPipe({
                transform: true,
                forbidUnknownValues: true,
                validationError: { target: true },
                groups: ['update'],
            }),
        )
        data: UpdatePostDto,
    ) {
        return this.postService.update(data);
    }

    /**
     * @description 删除文章
     * @param {number} id 文章ID
     */
    @Delete(':post')
    async destroy(@Param('post', new ParseIntPipe()) id: number) {
        return this.postService.delete(id);
    }
}
