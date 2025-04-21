import { IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateScoreDto {
  @IsString()
  @ApiProperty({
    description: "The player's Web3 address.",
    example: '0x1234567890abcdef1234567890abcdef12345678',
  })
  address: string;

  @IsNumber()
  @ApiProperty({
    description: "The player's new score.",
    example: 1000,
  })
  score: number;
}
