import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import request from 'supertest';

import { MainModule } from '../../src/main.module';
import { CompanyService } from '../../src/company/company.service';

describe('CompanyController (e2e)', () => {
    let app: INestApplication;
    let companyService: CompanyService;

    beforeAll(async () => {
        process.env = Object.assign(process.env, {});

        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [ MainModule ]
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();

        companyService = app.get<CompanyService>(CompanyService);
    });

    describe ('/', () => {

        it('/ (POST) 200', () => {
            const payload = {
                name: 'Cobee',
                description: 'An app that allows you to take control of your salary',
                website: 'cobee.io',
                email: 'hello@cobee.io',
                phone: '910123456',
                foundedYear: 2018,
                employees: 50
            };

            return request(app.getHttpServer())
            .post('/')
            .send(payload)
            .expect(HttpStatus.OK);
        });

        it('/ (POST) 400', () => {

            return request(app.getHttpServer())
                .post('/')
                .send({ invalidName: 'invalid', invalidDescription: 'invalid' })
                .expect(HttpStatus.BAD_REQUEST);

        });
    });
});
