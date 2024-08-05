import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  @ApiOperation({ summary: 'Criar novo usuário' })
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Buscar todos os usuários' })
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar usuário por id' })
  @ApiParam({ name: 'id', type: 'number', description: 'User ID' })
  findOne(@Param('id') id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar usuario' })
  @ApiParam({ name: 'id', type: 'number', description: 'User ID' })
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto): Promise<User> {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar usuário' })
  @ApiParam({ name: 'id', type: 'number', description: 'User ID' })
  remove(@Param('id') id: number): Promise<void> {
    return this.userService.remove(id);
  }
}
