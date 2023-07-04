import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('content_posts')
export class PostEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ comment: '文章标题' })
    title!: string;

    @Column({ comment: '文章内容', type: 'longtext' })
    body: string;

    @Column({ comment: '文章描述', nullable: true })
    summary?: string;

    @Column({ comment: '关键字', type: 'simple-array', nullable: true })
    keywords?: string[];

    @CreateDateColumn({
        comment: '创建时间',
    })
    createdAt!: Date;

    @UpdateDateColumn({
        comment: '更新时间',
    })
    updatedAt!: Date;
}
