import { Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';

@Controller('/api/v1')
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Post('/users')
  async createUser() {
    const user = await this.prisma.user.create({
      data: {
        name: 'Angelo Ricardo',
        email: 'angelo@email.com',
        skill: 'full stack developer',
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
