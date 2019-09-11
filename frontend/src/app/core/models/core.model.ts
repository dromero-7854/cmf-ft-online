export class Credentials {
  public constructor(
    public username: string,
    public password: string
  ) { };
}

export enum Role {
  User = 'ROLE_USER',
  Admin = 'ROLE_ADMIN',
  SuperAdmin = 'ROLE_SUPER_ADMIN',
}