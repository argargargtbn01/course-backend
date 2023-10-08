import { Course } from 'src/courses/entities/course.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Course, (course) => course.teacher)
  courses: Course[];

  @OneToOne(() => User, { cascade: true })
  @JoinColumn()
  user: User;
}
