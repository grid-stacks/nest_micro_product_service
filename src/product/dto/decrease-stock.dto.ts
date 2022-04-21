import { IsNumber } from 'class-validator';
import { DecreaseStockRequest } from '../product.pb';

export class DecreaseStockDto implements DecreaseStockRequest {
  @IsNumber({ allowInfinity: false, allowNaN: false })
  public readonly id: number;

  @IsNumber({ allowInfinity: false, allowNaN: false })
  public readonly orderId: number;
}
