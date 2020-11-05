import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { MainModule } from './main.module';

async function bootstrap() {
    const app = await NestFactory.create(MainModule, {
        logger: true
    });

    const config = app.get<ConfigService>(ConfigService);

    const context = config.get<string>('api.context');

    if (context) {
        console.info(`API context: ${context}`);
        app.setGlobalPrefix(context);
    }

    // Swagger
    const options = new DocumentBuilder()
        .setTitle('Company')
        .setDescription('The company\'s API')
        .addBearerAuth()
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup(`${context ? context + '/' : ''}api`, app, document);

    app.enableCors();
    await app.listen(config.get<number>('api.port'));
    console.info(`Server listening on port: ${config.get<number>('api.port')}`);
}

bootstrap();
