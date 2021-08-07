export class Post {
  public id: string;

  public title: string;

  public userId: string;

  public content: string;

  public readonly createdAt: Date;

  constructor(
    id: string,
    title: string,
    userId: string,
    content: string,
    createdAt: Date
  ) {
    this.id = id;
    this.title = title;
    this.userId = userId;
    this.content = content;
    this.createdAt = createdAt;
  }
}
