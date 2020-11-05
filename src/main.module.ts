import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import configuration from './config/configuration';
import { CompanyModule } from './company/company.module';
import { SalesModule } from './sales/sale.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load:[configuration]
        }),
        CompanyModule,
        SalesModule
    ]
})
export class MainModule {}
