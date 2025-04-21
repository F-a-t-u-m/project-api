import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { PlayersService } from 'src/players/services/players.service';
import { WinnersService } from 'src/winners/services/winners.service';

@Injectable()
export class CronService {
  constructor(
    private readonly playersService: PlayersService,
    private readonly winnersService: WinnersService,
  ) {}

  @Cron('0 0 * * *')
  async handleCron() {
    const winner = await this.playersService.getTopPlayer();
    await this.winnersService.saveWinner(winner);
    await this.playersService.resetScores();
  }
}
