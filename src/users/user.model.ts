import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 128 })
  email: string;

  @Column('varchar', { length: 32 })
  login: string;

  @Column('varchar', { length: 128 })
  password: string;

  @Column('varchar', { length: 32, nullable: true })
  token_code: string;
}