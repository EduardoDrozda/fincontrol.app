export interface IAuth {
  user: IAuthUser;
  token: IAuthToken;
}

interface IAuthUser {
  id: string;
  email: string;
}

interface IAuthToken {
  type: string;
  token: string;
}
