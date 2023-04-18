import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../Entity/UserEntity';
import { Repository } from 'typeorm';
import { UserDto } from '../DTO/userDto';
import { from, Observable } from 'rxjs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  create(user: UserDto): Observable<UserDto> {
    return from(this.userRepository.save(user));
  }

  findOne(id: number): Observable<UserEntity> {
    return from(this.userRepository.findOneBy({ id: id }));
  }

  findAll(): Observable<UserEntity[]> {
    return from(this.userRepository.find());
  }

  update(id: number, user: Partial<UserDto>): Observable<any> {
    return from(this.userRepository.update(id, user));
  }
}
