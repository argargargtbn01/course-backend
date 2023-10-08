import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/users/users.service';
import { CreateStudentDto } from './dtos/create-student.dto';
import { UpdateStudentDto } from './dtos/update-student.dto';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly StudentRepo: Repository<Student>,
    private readonly userService: UserService,
  ) {}
  async findAll(): Promise<Student[]> {
    return await this.StudentRepo.find({ relations: { user: true } });
  }
  async findById(id: number): Promise<Student> {
    return await this.StudentRepo.findOne({
      where: {
        id,
      },
      relations: {
        user: true,
      },
    });
  }
  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    const { userId } = createStudentDto;
    const user = await this.userService.findById(userId);
    const newStudent = { user };
    return await this.StudentRepo.save(newStudent);
  }

  async update(
    id: number,
    updateStudentDto: UpdateStudentDto,
  ): Promise<Student> {
    await this.StudentRepo.update({ id }, updateStudentDto);
    return this.findById(id);
  }

  async delete(id: number): Promise<void> {
    await this.StudentRepo.delete(id);
  }
}
