import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsNumber, IsEthereumAddress, IsDateString } from 'class-validator';

export class WinnerDto {
  @ApiProperty({
    description: 'The unique identifier of the winner',
    example: 'f9e61e6e-9b3a-4f1a-9e4c-8b4373e673db',
  })
  @IsUUID()
  id: string;

  @ApiProperty({
    description: 'The address of the winner (Web3 address)',
    example: '0xF91e87f9913F8276b9D635e768FdE399350F005D',
  })
  @IsEthereumAddress()
  address: string;

  @ApiProperty({
    description: 'The score of the winner',
    example: 500,
  })
  @IsNumber()
  score: number;

  @ApiProperty({
    description: 'The number of transactions made by the winner',
    example: 15,
  })
  @IsNumber()
  transactionsCount: number;

  @ApiProperty({
    description: 'The date when the winner was created',
    type: String,
    example: '2025-04-21T12:30:00Z',
  })
  @IsDateString()
  createdAt: Date;
}
