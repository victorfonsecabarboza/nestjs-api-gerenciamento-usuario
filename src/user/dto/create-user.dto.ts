import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
    @ApiProperty()
    @IsString()
    nome: string;

    @ApiProperty()
    @IsString()
    sobrenome: string;

    @ApiProperty()
    @IsString()
    endereco: string;

    @ApiProperty()
    @IsEmail()
    email: string;
}
