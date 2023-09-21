import { Teacher } from 'src/teachers/entities/teacher.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Course {
  @PrimaryGeneratedColumn({
    name: 'course_id',
  })
  courseId: number;

  @Column({
    name: 'subject_id',
  })
  subjectId: string;

  @Column({
    name: 'course_class_id',
  })
  courseClassId: number;

  @ManyToOne(() => Teacher)
  teacher: Teacher;

  @OneToMany(() => Student)
  student: Student;
}
