import { IUser, User } from '../users-list';

export class UserDetailed extends User {
  homeUrl: string | null = null;
  name: string | null = null;
  company: string | null = null;
  blog: string | null = null;
  location: string | null = null;
  email: string | null = null;
  bio: string | null = null;
  reposCount: number | null = null;
  followersCount: number | null = null;
  createdAt: Date | null = null;

  constructor(props: IUserDetailed) {
    super({
      login: props.login,
      id: props.id,
      avatar_url: props.avatar_url,
      repos_url: props.repos_url,
      followers_url: props.followers_url,
    });
    this.name = props.name;
    this.company = props.company;
    this.location = props.location;
    this.email = props.email;
    this.bio = props.bio;
    this.reposCount = props.public_repos;
    this.followersCount = props.followers;
  }
}

export interface IUserDetailed extends IUser {
  name: string;
  company: string;
  location: string;
  email: string;
  bio: string;
  public_repos: number;
  followers: number;
}

export class Repo {
  name: string | null;
  url: string | null;
  description: string | null;
  constructor(props: IRepo) {
    this.name = props.name;
    this.url = props.html_url;
    this.description = props.description;
  }
}
export interface IRepo {
  name: string;
  html_url: string;
  description: string;
}
