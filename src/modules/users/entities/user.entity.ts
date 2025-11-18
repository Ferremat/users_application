import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('usuario')
export class user {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true, length: 30 })
  name: string;

  @Column({ type: 'varchar', length: 32 }) // <- aquí
  password: string;

  @Column({ nullable: false, unique: true, length: 100 })
  email: string;

  @Column({ nullable: false, unique: true, length: 20 })
  username: string;

  @UpdateDateColumn()
  updatedAt: Date;

  @CreateDateColumn()
  createdAt: Date;
}
