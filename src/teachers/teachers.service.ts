import { Injectable } from '@nestjs/common';
import { Teacher } from './entities/teacher.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTeacherDto } from './dtos/create-teacher.dto';
import { UpdateTeacherDto } from './dtos/update-teacher.dto';
import { UserService } from 'src/users/users.service';

@Injectable()
export class TeachersService {
  constructor(
    @InjectRepository(Teacher)
    private readonly teacherRepo: Repository<Teacher>,
    private readonly userService: UserService,
  ) {}
  async findAll(): Promise<Teacher[]> {
    return await this.teacherRepo.find({ relations: { user: true } });
  }
  async findById(id: number): Promise<Teacher> {
    return await this.teacherRepo.findOne({
      where: {
        id,
      },
      relations: {
        user: true,
      },
    });
  }
  async create(createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    const { userId } = createTeacherDto;
    const user = await this.userService.findById(userId);
    const newTeacher = { user };
    return await this.teacherRepo.save(newTeacher);
  }

  async update(
    id: number,
    updateTeacherDto: UpdateTeacherDto,
  ): Promise<Teacher> {
    await this.teacherRepo.update({ id }, updateTeacherDto);
    return this.findById(id);
  }

  async delete(id: number): Promise<void> {
    await this.teacherRepo.delete(id);
  }
}
