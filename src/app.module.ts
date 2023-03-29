import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './Owner/account/entities/account.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Owner } from './Owner/owner/entities/owner.entity';
import { AccountController } from './Owner/account/account.controller';
import { OwnerController } from './Owner/owner/owner.controller';
import { AccountService } from './Owner/account/account.service';
import { OwnerService } from './Owner/owner/owner.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_DATABASE || 'bankdolgozat',
      entities: [
        Owner, Account
      ],
      synchronize: true,
    }),
  ],
  controllers: [AppController, AccountController, OwnerController],
  providers: [AppService, AccountService, OwnerService],
})
export class AppModule {}
