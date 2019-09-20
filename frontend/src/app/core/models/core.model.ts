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

export interface MenuItem {
  name: string;
  expanded?: boolean;
  disabled?: boolean;
  icon?: string;
  route?: string;
  children?: MenuItem[];
  role?: string[];
}

export interface FTRequest {
  reqId: string;
  state: string;
  expirationDate: string;
  total: string;
  pfRate: string;
  ftdId: string;
  applicantName: string;
  pfReqRate: string;
  cuilCuit: string;
  email: string;
  debin: string;
  debinState: string;
  credin: string;
  credinState: string;
  reqDate: string;
}