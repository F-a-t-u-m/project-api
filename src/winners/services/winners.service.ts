import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Winner } from '../entities/winner.entity';
import { Player } from 'src/players/entities/player.entity';

@Injectable()
export class WinnersService {
  constructor(
    @InjectRepository(Winner)
    private readonly winnerRepository: Repository<Winner>,
  ) {}

  async getAll(): Promise<Winner[]> {
    return this.winnerRepository.find();
  }

  async getLastWinner(): Promise<Winner | undefined> {
    const winner = await this.winnerRepository.findOne({
      order: { date: 'DESC' },
    });

    return winner ?? undefined;
  }

  async saveWinner(winner: Player | null) {
    if (!!winner) {
      const newWinner = this.winnerRepository.create({
        address: winner.address,
        score: winner.score,
        transactionsCount: winner.transactionsCount,
      });
      await this.winnerRepository.save(newWinner);
    }
  }
}
