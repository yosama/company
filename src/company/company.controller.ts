import { Controller, UseFilters, HttpStatus, Post, Body, HttpCode }
    from '@nestjs/common';
import { ApiResponse, ApiTags, } from '@nestjs/swagger';

import { CompanyDTO } from './dto/company.dto';
import { CompanyService } from './company.service';
import { CreateCompanyDTO, CreateCompanyPipe }
    from './dto/request/create.company.dto';
import { ServiceHttpResponse, HttpExceptionFilter }
    from '../common/exception.filter';

@Controller()
@ApiTags('Company')
@UseFilters(HttpExceptionFilter)
export class CompanyController {
    constructor(private readonly companyService: CompanyService) {}

    @Post('/')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'The data was successfully returned',
        type: CompanyDTO
    })
    @ApiResponse({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        description: 'Internal error',
        type: ServiceHttpResponse
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        description: 'Request doesn\'t meet the schema',
        type: ServiceHttpResponse
    })
    createCompany(
        @Body(CreateCompanyPipe) payload: CreateCompanyDTO
    ): CompanyDTO {
        return this.companyService.createCompany(payload);
    }
}
