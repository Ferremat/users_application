import { Injectable } from '@nestjs/common';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

@Injectable()
export class UsersService {
  private db: Low<any>;
  constructor() {
    const adapter = new JSONFile('commob/db/db.json');
    this.db = new Low(adapter, { users: [] });
  }
  async finAll() {
    await this.db.read();
    return this.db.data.users;
  }
  new() {
    this.db.read();
    const user = {
      id: this.db.data.users.length + 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'XXXXXXXXXXX',
    };
    this.db.data.users.push(user);
    this.db.write();
    return user;
  }
}
