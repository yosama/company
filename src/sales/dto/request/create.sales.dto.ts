import { ApiProperty } from '@nestjs/swagger';
import * as Joi from '@hapi/joi';

import { JoiValidationPipe } from '../../../common/joi.validation.pipe';

export class CreateTalkDTO {
    @ApiProperty()
    title: string;
    @ApiProperty()
    description?: string;
    @ApiProperty()
    startDate?: number;
    @ApiProperty()
    speaker: string;
}

export const CreateSalesSchema = Joi.object({
    title: Joi.string().required()
        .label('title'),
    description: Joi.string().optional()
        .label('description'),
    speaker: Joi.string().required()
        .label('speaker'),
    startDate: Joi.string().required()
        .label('startDate'),
});

export const CreateSalesPipe = new JoiValidationPipe(CreateSalesSchema);