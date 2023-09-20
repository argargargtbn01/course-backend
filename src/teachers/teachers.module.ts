import { Module } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { TeachersController } from './teachers.controller';
import { TeachersService } from './teachers.service';

@Module({
  providers: [TeachersService],
  controllers: [TeachersController],
})
export class TeachersModule {}
