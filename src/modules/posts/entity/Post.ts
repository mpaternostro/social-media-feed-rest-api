export class Post {
  public title: string;

  public user: string;

  public content: string;

  constructor(title: string, user: string, content: string) {
    this.title = title;
    this.user = user;
    this.content = content;
  }
}
