import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Course } from 'src/courses/entities/course.entity';

export class UpdateTeacherDto {
  @IsNotEmpty()
  @IsArray()
  courses: Course[];
}
