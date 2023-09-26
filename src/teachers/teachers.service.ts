import { Injectable } from '@nestjs/common';
import { Teacher } from './entities/teacher.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTeacherDto } from './dtos/create-teacher.dto';
import { UpdateTeacherDto } from './dtos/update-teacher.dto';

@Injectable()
export class TeachersService {
  constructor(
    @InjectRepository(Teacher)
    private readonly teacherRepo: Repository<Teacher>,
  ) {}
  async findAll(): Promise<Teacher[]> {
    return await this.teacherRepo.find();
  }
  async findById(userId: number): Promise<Teacher> {
    return await this.teacherRepo.findOne({
      where: {
        userId,
      },
    });
  }
  async create(createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    return await this.teacherRepo.save(createTeacherDto);
  }

  async update(
    userId: number,
    updateTeacherDto: UpdateTeacherDto,
  ): Promise<Teacher> {
    await this.teacherRepo.update({ userId }, updateTeacherDto);
    return this.findById(userId);
  }

  async delete(id: number): Promise<void> {
    await this.teacherRepo.delete(id);
  }
}
