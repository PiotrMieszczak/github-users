export class User {
  login: string | null = null;
  id: string | null = null;
  avatar: string = '';
  repoUrl: string = '';
  followersUrl: string = '';

  constructor(prop: IUser) {
    this.login = prop.login;
    this.id = prop.id;
    this.avatar = prop.avatar_url;
    this.repoUrl = prop.repos_url;
    this.followersUrl = prop.followers_url;
  }
}

export interface IUser {
  login: string;
  id: string | null;
  avatar_url: string;
  followers_url: string;
  repos_url: string;
}
