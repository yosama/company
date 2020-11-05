import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';

@Module({
    imports:[ConfigModule],
    controllers: [CompanyController],
    providers: [CompanyService]
})
export class CompanyModule {}
