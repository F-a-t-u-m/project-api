import { Entity, Column, PrimaryColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Player {
  @PrimaryColumn()
  address: string;

  @Column({ default: 0 })
  score: number;

  @Column({ default: 0 })
  transactionsCount: number;

  @UpdateDateColumn()
  updatedAt: Date;
}
