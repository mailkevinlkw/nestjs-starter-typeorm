import { Module } from '@nestjs/common';
import IndexController from './index.controller';
import IndexService from './index.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AuthUser } from '../../entities/AuthUser';

@Module({
  imports: [TypeOrmModule.forFeature([AuthUser])],
  controllers: [IndexController],
  providers: [IndexService],
})
export default class AuthUserModule {}
