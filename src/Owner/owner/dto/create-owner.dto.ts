import { IsNotEmpty } from "class-validator";

export class CreateOwnerDto {

    @IsNotEmpty()
    fullName: string

    @IsNotEmpty()
    buisness: boolean;
}
