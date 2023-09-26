import { AbstractAuditingEntity } from 'src/common/abstract-auditing-entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum UserRole {
  STUDENT = 'STUDENT',
  TEACHER = 'TEACHER',
}
@Entity()
export class User extends AbstractAuditingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  role: UserRole;
}
