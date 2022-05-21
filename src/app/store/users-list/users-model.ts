export class User {
  login: string | null = null;
  id: string | null = null;
  avatar: string = '';
  url: string = '';
  followers: string = '';
  repos: string = '';
  email: string = '';
  followersCount: number = 0;

  constructor(prop: IUser) {
    this.login = prop.login;
    this.id = prop.id;
    this.avatar = prop.avatar_url;
    this.url = prop.url;
    this.followers = prop.followers_url;
    this.repos = prop.repos_url;
    this.email = prop.email;
    this.followersCount = prop.followers;
  }
}

export interface IUser {
  login: string;
  id: string | null;
  avatar_url: string;
  url: string;
  followers_url: string;
  repos_url: string;
  email: string;
  followers: number;
}
