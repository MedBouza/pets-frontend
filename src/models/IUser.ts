export type MongoDocumentType = {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
};

export interface IUser extends MongoDocumentType {
  firstname: string;
  lastname: string;
  email: string;
}
export type SignInResponse = IUser & {
  accessToken: string;
  refreshToken: string;
  user: IUser;
};

export type SignUpData = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
};
export type SignInData = {
  email: string;
  password: string;
  isConnected: boolean;
};
export type UpdateData = {
  firstname: string;
  lastname: string;
  email: string;
};
