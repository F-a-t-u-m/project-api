import { IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PlayerDto {
  @IsString()
  @ApiProperty({
    description: "The player's Web3 address.",
    example: '0x1234567890abcdef1234567890abcdef12345678',
  })
  address: string;

  @IsNumber()
  @ApiProperty({
    description: "The player's score.",
    example: 1000,
  })
  score: number;

  @IsNumber()
  @ApiProperty({
    description: "The player's transaction count.",
    example: 10,
  })
  transactionsCount: number;
}
