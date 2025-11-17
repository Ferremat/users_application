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
  newUser() {
   
  }
}
