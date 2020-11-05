import { Test, TestingModule } from '@nestjs/testing';

import { CompanyService } from '../../src/company/company.service';
import { MainModule } from '../../src/main.module';

export const envs = {
    NODE_ENV: 'development'
};

describe('CompanyService', () => {
    let companyService: CompanyService;

    beforeAll(async () => {

        process.env = Object.assign(process.env, envs);

        const app: TestingModule = await Test.createTestingModule({
            imports: [MainModule]
        }).compile();

        companyService = app.get<CompanyService>(CompanyService);
    });

    describe('createCompany', () => {

        it('Should return the input data', () => {

            const payload = {
                name: 'Cobee',
                description: 'An app that allows you to take control of your salary',
                website: 'cobee.io',
                email: 'hello@cobee.io',
                phone: '910123456',
                foundedYear: 2018,
                employees: 50
            };

            const res = companyService.createCompany(payload);
            expect(res).toEqual(payload);
        });
    });
});
