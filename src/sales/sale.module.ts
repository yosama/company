import { Module } from '@nestjs/common';

import { SalesController } from './sales.controller';
import { SalesService } from './sales.service';

@Module({
  providers: [SalesService],
  controllers:[ SalesController]
})
export class SalesModule {}