import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto';

@Controller('cats')
export class CatsController {
  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return { msg: 'This action adds a new cat' };
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    return { msg: `This action returns all cats (limit: ${query} items)` };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { msg: `This action returns a #${id} cat` };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return { msg: `This action updates a #${id} cat` };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return { msg: `This action removes a #${id} cat` };
  }
}