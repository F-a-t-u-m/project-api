import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from '../entities/player.entity';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
  ) {}

  async createOrUpdate(address: string): Promise<Player> {
    let player = await this.playerRepository.findOne({ where: { address } });
    if (!player) {
      player = this.playerRepository.create({ address });
    }
    return this.playerRepository.save(player);
  }

  async updateScore(address: string, score: number): Promise<Player> {
    const player = await this.playerRepository.findOne({ where: { address } });
    if (!player) throw new Error('Player not found');

    if (score > player.score) {
      player.score = score;
    }
    return this.playerRepository.save(player);
  }

  async incrementTransactions(address: string): Promise<Player> {
    const player = await this.playerRepository.findOne({ where: { address } });
    if (!player) throw new Error('Player not found');

    player.transactionsCount += 1;
    return this.playerRepository.save(player);
  }

  async getTopPlayer(): Promise<Player | null> {
    return this.playerRepository
      .createQueryBuilder('player')
      .orderBy('player.score', 'DESC')
      .limit(1)
      .getOne();
  }

  async findAll(): Promise<Player[]> {
    return this.playerRepository.find();
  }

  async resetScores() {
    await this.playerRepository.update({}, { score: 0, transactionsCount: 0 });
  }
}
