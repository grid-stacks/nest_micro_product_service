import { Controller, Inject } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { GrpcMethod } from '@nestjs/microservices';
import {
  PRODUCT_SERVICE_NAME,
  CreateProductResponse,
  FindOneResponse,
  DecreaseStockResponse,
} from './product.pb';
import { FindOneDto } from './dto/find-one.dto';
import { DecreaseStockDto } from './dto/decrease-stock.dto';

@Controller('product')
export class ProductController {
  constructor(
    @Inject(ProductService) private readonly service: ProductService,
  ) {}

  @GrpcMethod(PRODUCT_SERVICE_NAME, 'CreateProduct')
  private createProduct(
    payload: CreateProductDto,
  ): Promise<CreateProductResponse> {
    return this.service.createProduct(payload);
  }

  @GrpcMethod(PRODUCT_SERVICE_NAME, 'FindOne')
  private findOne(payload: FindOneDto): Promise<FindOneResponse> {
    return this.service.findOne(payload);
  }

  @GrpcMethod(PRODUCT_SERVICE_NAME, 'DecreaseStock')
  private decreaseStock(
    payload: DecreaseStockDto,
  ): Promise<DecreaseStockResponse> {
    return this.service.decreaseStock(payload);
  }
}
