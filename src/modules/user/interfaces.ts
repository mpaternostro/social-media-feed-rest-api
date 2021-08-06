import { Request } from "express";

export interface UserAttributes {
  id: string;
  name: string;
  username: string;
}

export interface UserRequest extends Request {
  body: {
    name: string;
    username: string;
  };
}
