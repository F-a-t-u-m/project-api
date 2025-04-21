import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Winner {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  address: string;

  @Column({ default: 0 })
  score: number;

  @Column({ default: 0 })
  transactionsCount: number;

  @CreateDateColumn()
  date: Date;
}
