import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { PlayersModule } from '../players/players.module';
import { WinnersModule } from '../winners/winners.module';
import { CronService } from './services/cron.service';

@Module({
  imports: [ScheduleModule.forRoot(), PlayersModule, WinnersModule],
  providers: [CronService],
})
export class SharedModule {}
