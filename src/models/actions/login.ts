export interface LoginRequestState {
  type: string;
  email: string;
  password: string;
}

interface IResponse {
  uid: number;
}

export interface LoginResponseState {
  type: string;
  response: IResponse;
}
