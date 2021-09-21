import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { StatusModule } from './status/status.module';
import { CategoryModule } from './category/category.module';
import config from '../ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TodoModule,
    StatusModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
