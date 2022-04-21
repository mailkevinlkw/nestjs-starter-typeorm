import { Controller, Get,Delete,Param,Query } from '@nestjs/common';
import IndexService from './index.service';
import { PeoplecountTrafficcount } from '../../entities/PeoplecountTrafficcount';

@Controller("trafficCounts")
export default class IndexController {
  constructor(private readonly indexService: IndexService) {}

  @Get()
  findAll(@Query() query): Promise<PeoplecountTrafficcount[]> {
    return this.indexService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<PeoplecountTrafficcount> {
    return this.indexService.findOne(id);
  }
  
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.indexService.remove(id);
  }

}
