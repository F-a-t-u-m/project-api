import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { isAddress } from 'ethers';

@Injectable()
export class Web3AddressValidationPipe implements PipeTransform {
  transform(value: string) {
    console.log(value);

    if (typeof value !== 'string' || !isAddress(value)) {
      throw new BadRequestException('Invalid Web3 address');
    }
    return value;
  }
}
