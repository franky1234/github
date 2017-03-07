import { Injectable } from '@angular/core';
import { REPOSITORIES } from './mock-repositories';
import { Repositories } from './repositories';

@Injectable()
export class RepositoriesService {

  findRopositoryOwner( username ): Promise<Repositories> {
    let repo;
    repo = REPOSITORIES.find(element => {
      return element.owner === username;
    });
    return (repo !== undefined ) ? Promise.resolve(repo) : Promise.resolve({});
  }
}
