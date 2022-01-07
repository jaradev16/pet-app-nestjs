import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    title: string;

    @Column({ length: 255 })
    description: string;

    @Column('text')
    content: string;

    @Column({ default: false })
    isPublished: boolean;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date

}
