import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthUser } from '../../entities/AuthUser';
import BaseService from '../base.service';

@Injectable()
export default class IndexService extends BaseService<AuthUser> {
  // constructor(
  //   @InjectRepository(AuthUser)
  //   private authUsersRepository: Repository<AuthUser>,
  // ) {}


  constructor(
    @InjectRepository(AuthUser)
    protected readonly repo: Repository<AuthUser>
  ) {
    super();
  }

  async findAll(opts?): Promise<AuthUser[]> {
    return this.repo.find(opts);
  }


  async findOne(id: string): Promise<AuthUser> {
    return this.repo.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}