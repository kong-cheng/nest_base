import { Injectable, NotFoundException } from '@nestjs/common';

import { omit } from 'lodash';

import { CreatePostDto } from '../dtos/create-post.dto';
import { UpdatePostDto } from '../dtos/update-post.dto';
import { PostRepository } from '../repositories/post.repository';

@Injectable()
export class PostService {
    constructor(protected postRepository: PostRepository) {}

    /**
     * @description 查询文章列表

     */
    async findList() {
        return this.postRepository.find();
    }

    /**
     * @description 查询单个文章内容
     * @param {number} id
     */
    async findOne(id: number) {
        return this.postRepository.findOneOrFail({ where: { id } });
    }

    /**
     * @description 添加文章
     * @param {CreatePostDto} data
     * @returns {Promise<PostEntity>}
     */
    async create(data: CreatePostDto) {
        const item = await this.postRepository.save(data);
        return this.findOne(item.id);
    }

    /**
     * @description 修改文章
     * @param {UpdatePostDto} data
     * @returns {Promise<PostEntity>}
     */
    async update(data: UpdatePostDto) {
        await this.postRepository.update(data.id, omit(data, ['id']));
        return this.findOne(data.id);
    }

    /**
     * @description 删除文章
     * @param {number} data
     * @returns {Promise<PostEntity>}
     */
    async delete(id: number) {
        const post = await this.postRepository.findOne({ where: { id } });
        if (!post) throw new NotFoundException(`Post ${id} not exists`);
        return this.postRepository.remove(post);
    }
}
