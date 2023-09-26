import { Course } from 'src/courses/entities/course.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class Student {
  @PrimaryColumn()
  @OneToOne(() => User, {
    cascade: true,
    eager: true,
  })
  userId: number;

  @ManyToMany(() => Course, (course) => course.students, {
    cascade: true,
  })
  @JoinTable({ name: 'student_course' })
  courses: Course[];
}
