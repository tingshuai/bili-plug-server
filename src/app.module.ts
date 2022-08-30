import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BiliModule } from './bili/bili.module';

@Module({
  imports: [BiliModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
