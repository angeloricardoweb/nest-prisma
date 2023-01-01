import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { CreateUserDTO } from './dtos/createUserDto';

@Controller('/api/v1')
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Post('/users')
  async createUser(@Body() body: CreateUserDTO) {
    const { name, email, skill } = body;

    const user = await this.prisma.user.create({
      data: {
        name,
        email,
        skill,
      },
    });
    return { user };
  }

  @Get('/users')
  async getUsers() {
    const users = await this.prisma.user.findMany();
    return { users };
  }
}
