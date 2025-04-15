import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFound, ProductAlreadyExistError } from './errors';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {}
  async create(createProductDto: CreateProductDto) {
    const product = await this.prismaService.product.findFirst({
      where: {
        nome: createProductDto.nome,
      },
    });

    if (product) {
      throw new ProductAlreadyExistError(product.nome);
    }

    return this.prismaService.product.create({
      data: createProductDto,
    });
  }

  findAll() {
    return this.prismaService.product.findMany();
  }

  async findOne(id: string) {
    const product = await this.prismaService.product.findFirst({
      where: {
        id,
      },
    });

    if (!product) {
      throw new NotFound(id);
    }
    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const product = await this.prismaService.product.findFirst({
      where: {
        id,
      },
    });

    if (!product) {
      throw new NotFound(id);
    }
    const productName = await this.prismaService.product.findFirst({
      where: {
        nome: updateProductDto.nome,
      },
    });

    if (productName && productName.id !== id) {
      throw new ProductAlreadyExistError(product.nome);
    }

    return this.prismaService.product.update({
      where: {
        id,
      },
      data: updateProductDto,
    });
  }

  async remove(id: string) {
    const product = await this.prismaService.product.findFirst({
      where: {
        id,
      },
    });

    if (!product) {
      throw new NotFound(id);
    }

    return this.prismaService.product.delete({
      where: {
        id,
      },
    });
  }
}
