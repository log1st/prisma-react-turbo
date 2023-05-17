import { NestFactory } from '@nestjs/core';
import {
  CallHandler, ExecutionContext, Injectable, NestInterceptor, ValidationPipe,
} from '@nestjs/common';
import { useContainer } from 'class-validator';
import {
  delay, Observable,
} from 'rxjs';
import { ConfigService } from './config/config.service';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';
import { EnvironmentVariables } from './config/environment-variables';

@Injectable()
class DelayInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(delay(200));
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const prismaService = app.get(PrismaService);

  await prismaService.enableShutdownHooks(app);

  app.enableCors();

  useContainer(app.select(AppModule), {
    fallbackOnErrors: true,
  });

  app.useGlobalInterceptors(new DelayInterceptor());

  app.useGlobalPipes(new ValidationPipe({
    stopAtFirstError: true,
  }));

  const configService = app.get(ConfigService<EnvironmentVariables>);

  await app.listen(
    configService.get('PORT')!,
  );
}
bootstrap();
