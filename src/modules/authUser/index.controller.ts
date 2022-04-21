import { Controller, Get,Delete,Param ,Query} from '@nestjs/common';
import IndexService from './index.service';
import { AuthUser } from '../../entities/AuthUser';

@Controller("authUsers")
export default class IndexController {
  constructor(private readonly indexService: IndexService) {}

  @Get()
  async findAll(@Query() query): Promise<AuthUser[]> {
    return this.indexService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<AuthUser> {
    return this.indexService.findOne(id);
  }
  
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.indexService.remove(id);
  }

}
