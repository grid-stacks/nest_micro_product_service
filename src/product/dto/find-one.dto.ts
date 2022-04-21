import { IsNumber } from 'class-validator';
import { FindOneRequest } from '../product.pb';

export class FindOneDto implements FindOneRequest {
  @IsNumber({ allowInfinity: false, allowNaN: false })
  public readonly id: number;
}
