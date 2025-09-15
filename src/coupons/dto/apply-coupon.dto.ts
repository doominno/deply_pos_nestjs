import { IsNotEmpty } from "class-validator";

export class ApplyCountDto {
    @IsNotEmpty({message: 'El nombre del cupón es obligatorio'})
    coupon_name: string
}