import { Controller, Post, Body, Patch, Get } from '@nestjs/common';
import { PlayersService } from '../services/players.service';
import { Web3AddressValidationPipe } from 'src/shared/pipes/web3-address-validation.pipe';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateScoreDto } from '../DTOs/update-score.dto';
import { IncrementTransactionDto } from '../DTOs/increment-transactions.dto';
import { CreateOrUpdatePlayerDto } from '../DTOs/create-or-update-player.dto';
import { PlayerDto } from '../DTOs/player.dto';

@ApiTags('players')
@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  @ApiOperation({ summary: 'Create or update player' })
  @ApiBody({ description: 'Player address', type: CreateOrUpdatePlayerDto  })
  @ApiResponse({ status: 201, description: 'Player created or updated.' })
  @ApiResponse({ status: 400, description: 'Invalid Web3 address.' })
  createOrUpdate(@Body('address', Web3AddressValidationPipe) address: string) {
    return this.playersService.createOrUpdate(address);
  }

  @Patch('score')
  @ApiOperation({ summary: 'Update player score' })
  @ApiBody({ description: 'Player address and score', type: UpdateScoreDto })
  @ApiResponse({ status: 200, description: 'Player score updated.' })
  updateScore(@Body() body: UpdateScoreDto) {
    return this.playersService.updateScore(body.address, body.score);
  }

  @Patch('tx')
  @ApiOperation({ summary: 'Increment player transactions' })
  @ApiBody({ description: 'Player address', type: IncrementTransactionDto })
  @ApiResponse({ status: 200, description: 'Player transactions count incremented.' })
  incrementTransactions(@Body() body: IncrementTransactionDto) {
    return this.playersService.incrementTransactions(body.address);
  }

  @Get()
  @ApiOperation({ summary: 'Get all players' })
  @ApiResponse({ status: 200, description: 'List of players', type: [PlayerDto] })
  getAll() {
    return this.playersService.findAll();
  }
}
