import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { WinnersService } from '../services/winners.service';
import { WinnerDto } from '../DTOs/winner.dto';

@ApiTags('winners')
@Controller('winners')
export class WinnersController {
  constructor(private readonly winnersService: WinnersService) {}

  @Get()
  @ApiOperation({ summary: 'Get all winners' })
  @ApiResponse({
    status: 200,
    description: 'List of all winners',
    type: [WinnerDto],
  })
  getAll() {
    return this.winnersService.getAll();
  }

  @Get('last')
  @ApiOperation({ summary: 'Get the last winner' })
  @ApiResponse({
    status: 200,
    description: 'Last winner',
    type: WinnerDto,
  })
  @ApiResponse({ status: 404, description: 'No winners found' })
  getLastWinner() {
    return this.winnersService.getLastWinner();
  }
}
