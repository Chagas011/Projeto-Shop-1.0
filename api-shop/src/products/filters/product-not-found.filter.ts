import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { NotFound } from '../errors';
import { Response } from 'express';

@Catch(NotFound)
export class ProductNotFound implements ExceptionFilter {
  catch(exception: NotFound, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response.status(409).json({
      statusCode: 409,
      message: exception.message,
    });
  }
}
