import { ApiProperty } from '@nestjs/swagger';
import * as Joi from '@hapi/joi';

import { JoiValidationPipe } from '../../../common/joi.validation.pipe';

export class GetTalkDTO {
    @ApiProperty()
    date: string;
}

export const GetTalksSchema = Joi.object({
    date: Joi.string().optional().isoDate()
        .label('date'),
});



export const GetTalksPipe = new JoiValidationPipe(GetTalksSchema);