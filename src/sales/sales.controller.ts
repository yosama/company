import { Controller, UseFilters, HttpStatus, Post, Get, Body, HttpCode, Query }
    from '@nestjs/common';
import { ApiResponse, ApiTags, ApiQuery } from '@nestjs/swagger';

import { TalkDTO } from './dto/sales.dto';
import { SalesService } from './sales.service';
import { CreateTalkDTO, CreateSalesPipe }
    from './dto/request/create.sales.dto';
import { GetTalkDTO, GetTalksPipe }
    from './dto/request/get.talks.dto';
import { ServiceHttpResponse, HttpExceptionFilter }
    from '../common/exception.filter';


@Controller()
@ApiTags('Sales')
@UseFilters(HttpExceptionFilter)
export class SalesController {
    constructor(private readonly salesService: SalesService) {}

    @Post('/sales')
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({
        status: HttpStatus.CREATED,
        description: 'The data was successfully returned',
        type: TalkDTO
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
    createTalk(
        @Body(CreateSalesPipe) payload: CreateTalkDTO
    ): TalkDTO {
        return this.salesService.createTalk(payload);
    }

    @Get('/sales')
    @HttpCode(HttpStatus.OK)
    @ApiQuery({ name: 'date', type: String })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'The data was successfully returned',
        type: TalkDTO,
        isArray: true
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
    getTalksByDate(@Query(GetTalksPipe) queryParam: GetTalkDTO): TalkDTO[] {
        return this.salesService.getTalksByDate(queryParam?.date);
    }
}
