import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    id: string;

    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsEnum(['admin','user'], {
        message: "Valid role required"
    })
    role: 'admin' | 'user';
}