import { Post } from "../../posts/entities/post.entity"
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";

@Entity()
export class User {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({
        unique: true
    })
    email: string;

    @Column()
    password: string;
    
    @Column({ default: false })
    isActive: boolean;

    @OneToMany(() => Post, post => post.user)
    posts: Post[]

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