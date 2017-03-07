import { Component, OnInit } from '@angular/core';
import { RepositoriesService} from '../../repositories/repositories.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css'],
  providers: [RepositoriesService]
})
export class GroupsComponent implements OnInit {

  teamOwner: any;
  user: any;
  PATH = '../../../assets/img/';

  constructor(private router: ActivatedRoute, private repositoriesService: RepositoriesService) { }

  ngOnInit() {

    this.router.params.subscribe( param => this.user = param['team'] );
    this.repositoriesService.findRopositoryOwner(this.user)
    .then( data => {
      this.teamOwner = data;
    })
    .catch(error => console.log('error Group:', error));
  }

}
