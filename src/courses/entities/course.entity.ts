import { Student } from 'src/students/entities/student.entity';
import { Teacher } from 'src/teachers/entities/teacher.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
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

  @ManyToOne(() => Teacher, (teacher) => teacher.courses, {
    cascade: true,
  })
  @JoinColumn({
    name: 'user_id',
  })
  teacher: Teacher;

  @ManyToMany(() => Student, (student) => student.courses)
  students: Student[];
}
