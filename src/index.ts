import { User } from './types/index.js';
import * as UserService from './utils/math.js';
UserService.addUser('nakamura', 25);
UserService.addUser('alice', 26);
UserService.addUser('usagi', 27);
console.log(UserService.getAllUsers());

UserService.removeUser('alice');
UserService.removeUser('nijikuru');
console.log(UserService.getAllUsers());
