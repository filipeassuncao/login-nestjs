import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {

  }

  @Get()
  async index() {
    return this.usersService.findAll();
  }

  @Post()
  async store(@Body() body: CreateUserDto) {
    return this.usersService.store(body);
  }

  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id :string) {
    return this.usersService.findOneOrFail({ id });
  }

  @Put(':id')
  async update() {
    return null;
  }

  @Delete(':id')
  async destroy() {
    return null;
  }
}
