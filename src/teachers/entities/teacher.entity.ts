import { User } from 'src/users/entities/user.entity';
import { Entity, OneToOne } from 'typeorm';

@Entity()
export class Teacher {
  @OneToOne(() => User, { cascade: true, eager: true })
  userId: number;

  //   courses : Course[]
}
