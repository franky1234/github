import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Repositories } from './repositories';
import { RepositoriesService } from './repositories.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css'],
  providers: [RepositoriesService]
})
export class RepositoryComponent implements OnInit {

  user: string;
  repository: Repositories;
  constructor(private router: ActivatedRoute, private repositoriesService: RepositoriesService) {}

  ngOnInit() {
    this.router.params.subscribe( param => {
      this.user = param['repo'];
      this.repositoriesService.findRopositoryOwner(this.user)
    .then(data => {
      this.repository = data;
    })
    .catch( error => console.log('error message:', error));
  });
  }
}
