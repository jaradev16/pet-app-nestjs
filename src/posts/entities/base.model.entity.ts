import {
    CreateDateColumn,
    Generated,
    PrimaryColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  export const PG_UNIQUE_CONSTRAINT_VIOLATION = '23505';
  
  export interface DbError {
    code: string;
  }
  export const isDbError = (e: unknown): e is DbError =>
    (e as DbError).code !== undefined;
  
  export class BaseModel {
    @PrimaryColumn({ type: 'uuid' })
    @Generated('uuid')
    public id?: string;
  
    @CreateDateColumn()
    public createdAt?: Date;
  
    @UpdateDateColumn()
    public updatedAt?: Date;
  }
  