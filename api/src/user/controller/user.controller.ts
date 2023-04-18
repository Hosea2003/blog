import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UserDto } from '../DTO/userDto';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
  constructor(private service: UserService) {}

  @Get()
  listUser() {
    return this.service.findAll();
  }
  @Post()
  createUser(@Body() user: UserDto) {
    return this.service.create(user);
  }

  @Put(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() userDto: Partial<UserDto>,
  ) {
    return this.service.update(id, userDto);
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }
}
