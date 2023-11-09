import { Injectable } from '@nestjs/common';
import { CreateUserProps } from 'src/utils/types/UserTypes';

@Injectable()
export class UsersService {
  private usersFromDB = [
    { username: 'Victor', email: 'victor@email.com', id: 1 },
    { username: 'Santiago', email: 'santiago@email.com', id: 2 },
  ];

  fetchUsers() {
    return this.usersFromDB;
  }

  createUser(useData: CreateUserProps) {
    this.usersFromDB.push({ ...useData, id: 3 });
    return;
  }

  fetchUserById(id: number) {
    return this.usersFromDB.find((user) => user.id === id);
  }
}
