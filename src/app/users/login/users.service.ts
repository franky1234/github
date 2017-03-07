import { Injectable } from '@angular/core';
import { User} from './user';
import { USERS } from './mock-users';

@Injectable()
export class UserService {
  foundUserAndPassword(user): Promise<User> {
    let result;
    result = USERS.find( element => {
     return (user.username === element.username && user.password === element.password);
    });

    return (result !== undefined ) ? Promise.resolve(result) : Promise.resolve({});
  }
}
