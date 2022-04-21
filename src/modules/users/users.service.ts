import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { UserEntity } from '../../entities/users/user.entity';
import BaseService from '../base.service';

@Injectable()
export class UsersService extends BaseService<UserEntity> {

    constructor(
        @InjectRepository(UserEntity)
        protected readonly repo: Repository<UserEntity>
    ) {
        super();
    }

    async findAll(opts?): Promise<UserEntity[]> {
        return this.repo.find(opts);
    }


    async findOne(id: string): Promise<UserEntity> {
        return this.repo.findOne(id);
    }

    async remove(id: string): Promise<DeleteResult> {
        return await this.repo.delete(id);
    }
}
