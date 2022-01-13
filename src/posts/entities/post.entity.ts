import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ length: 255 })
    title: string;

    @Column({ length: 255 })
    description: string;

    @Column('text')
    content: string;

    @Column({ default: false })
    isPublished: boolean;

    @Column({ default: false})
    isDeleted: boolean

    @ManyToOne(() => User, user => user.posts, { nullable: true })
    user: User;

    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP'

    })
    createdAt: Date;

    @UpdateDateColumn({
        name: 'updated_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP'
    })
    updatedAt: Date

}
