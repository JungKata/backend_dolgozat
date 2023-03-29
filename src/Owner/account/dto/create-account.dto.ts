import { IsNotEmpty } from "class-validator";
import { min } from "class-validator/types/decorator/decorators";

export class CreateAccountDto {

    @IsNotEmpty()
    accountNumber: string;
    

    @IsNotEmpty()
    balance: number;
    
}
