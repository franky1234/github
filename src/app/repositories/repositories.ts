import { People } from '../peoples/people';
import { Repositorie } from './repos-list/repositorie';
import { Team } from '../teams/team';

export class Repositories {
  owner: string;
  username: string;
  role: string;
  teams: number;
  peoples: People[];
  repos: Repositorie[];
  groups: Team[];
  constructor( owner: string, username: string, role: string, teams: number, peoples: People[], repos: Repositorie[], groups: Team[]) {
    this.owner = owner;
    this.username = username;
    this.role = role;
    this.teams = teams;
    this.peoples = peoples;
    this.repos = repos;
    this.groups = groups;
  }
}
