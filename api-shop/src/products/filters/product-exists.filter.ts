import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { ProductAlreadyExistError } from '../errors';
import { Response } from 'express';

@Catch(ProductAlreadyExistError)
export class ProductAlreadyExistFilter implements ExceptionFilter {
  catch(exception: ProductAlreadyExistError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response.status(409).json({
      statusCode: 409,
      message: exception.message,
    });
  }
}
