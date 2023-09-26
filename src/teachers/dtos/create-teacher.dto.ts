import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTeacherDto {
  @IsNotEmpty()
  @IsNumber()
  userId: number;
}
