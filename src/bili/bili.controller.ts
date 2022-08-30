import { Controller, Get, Query, Req } from '@nestjs/common';
import * as biliAPI from 'bili-api';
import { Request } from 'express';
@Controller('bili')
export class BiliController {
  @Get('/guardLevel')
  async getGuardLevel(@Query() query) {
    if (!query.roomid) return;
    const res = await biliAPI({ roomid: query.roomid }, ['guards']);
    return res;
  }
}
