import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

export class UsersEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'first_name'})
  firstName: string;

  @Column({ name: 'lastName'})
  lastName: string

  @Column()
  email: string;

  @Column()
  password: string

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string

  @UpdateDateColumn({ name: 'updated_at'})
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at'})
  deletedAt: string
}