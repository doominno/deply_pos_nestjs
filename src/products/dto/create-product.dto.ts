import { IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateProductDto {
    @IsNotEmpty({message: 'El nombre del producto es Obligatorio'})
    @IsString({message: 'Nombre no válido'})
    name: string

    @IsNotEmpty({message: ''})
    image: string

    @IsNotEmpty({message: 'El precio del producto es Obligatorio'})
    @IsNumber({maxDecimalPlaces: 2}, {message: 'Precio no valido'})
    price: number

    @IsNotEmpty({message: 'La cantidad no puede ir vacia'})
    @IsNumber({maxDecimalPlaces: 0}, {message: 'Cantidad no valida'})
    inventory: number

    @IsNotEmpty({message: 'La categoria es obligatoria'})
    @IsInt({message: 'La categoría no es válida'})
    categoryId: number
}
