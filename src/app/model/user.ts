export class User {
  id!: string;
  name!: string;
  email!: string;
  password!: string;
  isEnterprise?: boolean;

  constructor(name: string, email: string, password: string) {
    this.id = String(Math.round(Math.random() * 1000));
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
