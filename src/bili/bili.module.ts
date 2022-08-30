import { Module } from '@nestjs/common';
import { BiliController } from './bili.controller';
import { BiliService } from './bili.service';

@Module({
  controllers: [BiliController],
  providers: [BiliService]
})
export class BiliModule {}
