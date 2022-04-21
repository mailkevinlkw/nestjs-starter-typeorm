import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import TrafficCountModule from './modules/trafficCount/index.module';

import { UsersModule } from './modules/users/users.module';

import { AllExceptionsFilter } from './common/AllExceptionsFilter';
import { APP_FILTER } from '@nestjs/core';
@Module({
  imports: [
    TrafficCountModule,
    TypeOrmModule.forRoot(),
    UsersModule],
  controllers: [AppController],
  providers: [
    AppService, {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    }
  ],
})
export class AppModule {
  constructor(private connection: Connection) { }
}
