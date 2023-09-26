import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}
  async findAll(): Promise<User[]> {
    return await this.userRepo.find();
  }
  async findById(id: number): Promise<User> {
    return await this.userRepo.findOne({
      where: {
        id,
      },
    });
  }
  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.userRepo.save(createUserDto);
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    await this.userRepo.update({ id }, updateUserDto);
    return this.findById(id);
  }

  async delete(id: number): Promise<void> {
    await this.userRepo.delete(id);
  }
}
