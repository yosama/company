import { ApiProperty } from '@nestjs/swagger';
import * as Joi from '@hapi/joi';

import { JoiValidationPipe } from '../../../common/joi.validation.pipe';

export class CreateCompanyDTO {
    @ApiProperty()
    readonly name: string;
    @ApiProperty()
    readonly description?: string;
    @ApiProperty()
    readonly website?: string;
    @ApiProperty()
    readonly email?: string;
    @ApiProperty()
    readonly phone?: string;
    @ApiProperty()
    readonly foundedYear?: number;
    @ApiProperty()
    readonly employees?: number;
}

export const CreateCompanySchema = Joi.object({
    name: Joi.string().optional()
        .label('name').description('Company name'),
    description: Joi.string().optional()
        .label('description').description('Company description'),
    website: Joi.string().optional()
        .label('homepage').description('Company homepage'),
    email: Joi.string().optional()
        .label('email').description('Company email'),
    phone: Joi.string().optional()
        .label('phone').description('Company phone'),
    employees: Joi.number().optional()
        .label('numberOfEmployees').description('Number of company employees'),
    foundedYear: Joi.number().optional()
        .label('foundedYear').description('Company age')
});

export const CreateCompanyPipe = new JoiValidationPipe(CreateCompanySchema);