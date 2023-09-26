import { Course } from 'src/courses/entities/course.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class Teacher {
  @PrimaryColumn()
  @OneToOne(() => User, { cascade: true, eager: true })
  userId: number;

  @OneToMany(() => Course, (course) => course.teacher)
  courses: Course[];
}
