
import { Controller, UseFilters, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserEntity } from '../../entities/users/user.entity';
// docs: https://typeorm.io/repository-api
@Controller('users')
export class UsersController {

    constructor(private readonly service: UsersService) { }

    @Get()
    async findAll(@Query() query): Promise<UserEntity[]> {
        return this.service.findAll(query);
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<UserEntity> {
        const res = await this.service.findOne(id);
        return res
    }
    @Post()
    async add(@Body() user: UserEntity): Promise<any> {
        return this.service.add(user);
    }
    @Put()
    update(@Body() user: UserEntity) {
        return this.service.update(String(user.id), user);
    }
    @Delete()
    remove(@Body() user: UserEntity) {
        return this.service.remove(String(user.id));
    }

}
