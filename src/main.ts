import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger, ValidationPipe } from '@nestjs/common';
import { createValidationException } from '@common/utils/create-validation-exception';
import { LoggingInterceptor } from '@common/infra/interceptors/logger.interceptor';
import { LoggerService } from '@common/infra/services/logger/logger.service';
import { ResponseInterceptor } from '@common/infra/interceptors/response.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AllExceptionFilter } from '@common/infra/filter/exception.filter';

async function bootstrap() {
  const env = process.env.NODE_ENV;
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors) => createValidationException(errors),
    }),
  );

  app.useGlobalFilters(new AllExceptionFilter(new LoggerService()));

  app.useGlobalInterceptors(new LoggingInterceptor(new LoggerService()));

  app.useGlobalInterceptors(new ResponseInterceptor(new LoggerService()));

  app.set('trust proxy', 1);

  if (env !== 'production') {
    const config = new DocumentBuilder()
      .setTitle('Trailed')
      .setDescription('IGDB 게임 배치 서버입니다.')
      .setVersion('1.0')
      .setExternalDoc('스웨거 JSON', '/doc-json')
      .build();

    const document = SwaggerModule.createDocument(app, config, {
      deepScanRoutes: true,
    });
    SwaggerModule.setup('doc', app, document, {
      useGlobalPrefix: true,
      swaggerOptions: {
        persistAuthorization: true,
        tagsSorter: 'alpha',
        operationsSorter: 'method',
      },
    });
  }

  await app.listen(8000);
}
bootstrap();
