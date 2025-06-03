import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUsers(): { name: string; email: string }[] {
    return [
      {
        name: 'rakesh',
        email: 'rakesh@gmail.com',
      },
      {
        name: 'rajesh',
        email: 'rajesh@gmail.com',
      },
    ];
  }
}
