import { Request } from "express";

export interface PostAttributes {
  id: string;
  title: string;
  userId: string;
  content: string;
}

export interface PostRequest extends Request {
  body: {
    title: string;
    userId: string;
    content: string;
  };
}
