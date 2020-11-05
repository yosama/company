import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { CreateCompanyDTO } from './dto/request/create.company.dto';
import { CompanyDTO } from './dto/company.dto';

@Injectable()
export class CompanyService {
    constructor(
        private readonly config: ConfigService
    ) {}

    createCompany(payload: CreateCompanyDTO): CompanyDTO {
        console.log('Creating new company');

        return payload;
    }
}
