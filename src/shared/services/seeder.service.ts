import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Player } from 'src/players/entities/player.entity';
import { Winner } from 'src/winners/entities/winner.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SeederService implements OnModuleInit {
  constructor(
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
    @InjectRepository(Winner)
    private readonly winnerRepository: Repository<Winner>,
  ) {}

  async onModuleInit() {
    const playerCount = await this.playerRepository.count();
    if (playerCount === 0) {
      const players = this.playerRepository.create([
        { address: '0x1234567890abcdef1', score: 100, transactionsCount: 3 },
        { address: '0xabcdef1234567890', score: 150, transactionsCount: 7 },
        { address: '0xfeed1234cafe5678', score: 80, transactionsCount: 2 },
      ]);
      await this.playerRepository.save(players);
      console.log('[Seeder] Players seeded!');
    }

    const winnerCount = await this.winnerRepository.count();
    if (winnerCount === 0) {
      const winners = this.winnerRepository.create([
        {
          address: '0xabcdef1234567890',
          score: 150,
          transactionsCount: 7,
          date: new Date('2024-01-01'),
        },
      ]);
      await this.winnerRepository.save(winners);
      console.log('[Seeder] Winners seeded!');
    }
  }
}
