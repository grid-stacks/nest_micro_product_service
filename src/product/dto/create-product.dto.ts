import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CreateProductRequest } from '../product.pb';

export class CreateProductDto implements CreateProductRequest {
  @IsString()
  @IsNotEmpty()
  public readonly name: string;

  @IsString()
  @IsNotEmpty()
  public readonly sku: string;

  @IsNumber({ allowInfinity: false, allowNaN: false })
  public readonly stock: number;

  @IsNumber({ allowInfinity: false, allowNaN: false })
  public readonly price: number;
}
