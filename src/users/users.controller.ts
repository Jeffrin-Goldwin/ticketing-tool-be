import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { Users } from './users';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {

    constructor(private readonly users: Users) { }

    @Get()
    findAll(@Query('role') role?: 'admin' | 'user') {
        return this.users.findAll(role)
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.users.findOne(id)
    }

    @Post()
    create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
        return this.users.create(createUserDto)
    }

    @Patch(':id')
    updateOne(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.users.update(id, updateUserDto)
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.users.delete(id)
    }
}
