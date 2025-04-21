import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrUpdatePlayerDto {
  @IsString()
  @ApiProperty({
    description: "The player's Web3 address.",
    example: '0x1234567890abcdef1234567890abcdef12345678',
  })
  address: string;
}
