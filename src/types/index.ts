export class User {
  name: string;
  age: number;
  private static users: User[] = [];

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    User.users.push(this);
  }

  static getUsers(): User[] {
    return [...User.users];
  }

  static removeUser(name: string): void {
    const index = User.users.findIndex((user) => user.name === name);
    if (index !== -1) {
      User.users.splice(index, 1);
      console.log(`${name} を削除しました`);
    } else {
      console.log(`${name} は見つかりませんでした`);
    }
  }
}
