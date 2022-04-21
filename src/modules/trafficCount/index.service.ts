import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import { PeoplecountTrafficcount } from '../../entities/PeoplecountTrafficcount';
import BaseService from '../base.service';

@Injectable()
export default class IndexService extends BaseService<PeoplecountTrafficcount> {
  // constructor(
  //   @InjectRepository(AuthUser)
  //   private authUsersRepository: Repository<AuthUser>,
  // ) {}


  constructor(
    @InjectRepository(PeoplecountTrafficcount)
    protected readonly repo: Repository<PeoplecountTrafficcount>
  ) {
    super();
  }  
}