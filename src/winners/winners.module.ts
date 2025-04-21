import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Winner } from './entities/winner.entity';
import { WinnersController } from './controllers/winners.controller';
import { WinnersService } from './services/winners.service';

@Module({
  imports: [TypeOrmModule.forFeature([Winner])],
  controllers: [WinnersController],
  providers: [WinnersService],
  exports: [WinnersService],
})
export class WinnersModule {}
