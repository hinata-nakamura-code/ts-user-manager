import { User } from '../types/index.js';
export function addUser(name: string, age: number): User {
  return new User(name, age);
}
export function removeUser(name: string): void {
  User.removeUser(name);
}

export function getAllUsers(): User[] {
  return User.getUsers();
}
