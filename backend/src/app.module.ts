import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaService } from './common/prisma/innit.prisma';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, ConfigService],
})
export class AppModule {}
