import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import request from 'supertest';

import { MainModule } from '../../src/main.module';
import { SalesService } from '../../src/sales/sales.service';

describe('CompanyController (e2e)', () => {
    let app: INestApplication;
    let salesService: SalesService;

    beforeAll(async () => {
        process.env = Object.assign(process.env, {});

        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [ MainModule ]
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();

        salesService = app.get<SalesService>(SalesService);
    });

    describe ('/', () => {

        it('/ (POST) 201', () => {
            const payload = {
                title: 'title 1',
                description: 'Descriptiont title 1',
                speaker: 'Pepe',
                startDate: Date.now(),
            };

            return request(app.getHttpServer())
            .post('/sales')
            .send(payload)
            .expect(HttpStatus.CREATED);
        });


        it('/ (GET) 200', () => {

            return request(app.getHttpServer())
            .get('/sales')
            .query({ date: '2020-10-21' })
            .expect(HttpStatus.OK);
        });


        it('/ (GET) 400', () => {

            return request(app.getHttpServer())
                .post('/')
                .send({ invalidName: 'invalid', invalidDescription: 'invalid' })
                .expect(HttpStatus.BAD_REQUEST);

        });
    });
});
