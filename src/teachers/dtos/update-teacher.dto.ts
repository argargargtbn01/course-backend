import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Course } from 'src/courses/entities/course.entity';

export class UpdateTeacherDto {
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @IsNotEmpty()
  @IsArray()
  courses: Course[];
}
