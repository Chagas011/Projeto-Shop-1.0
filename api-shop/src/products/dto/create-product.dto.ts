import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateProductDto {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;

  @Min(1)
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsNotEmpty()
  preco: number;

  @IsString()
  @IsNotEmpty()
  image: string;

  @IsString()
  @IsNotEmpty()
  star: string;

  @IsString()
  @IsNotEmpty()
  categoria: string;
}
