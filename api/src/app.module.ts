import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { CommonModule } from './common/common.module';
import * as OrmConfiguration from './config/ormconfiguration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      ...OrmConfiguration,
      autoLoadEntities: true,
    }),
    UserModule,
    CommonModule,
  ],
})
export class AppModule {}
