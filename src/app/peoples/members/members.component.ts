import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepositoriesService } from '../../repositories/repositories.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  providers: [RepositoriesService]
})
export class MembersComponent implements OnInit {
  peopleOwner: any;
  user: any;
  PATH = '../../../assets/img/';

  constructor(private router: ActivatedRoute, private repositoriesService: RepositoriesService) { }

  ngOnInit() {
    this.router.params.subscribe( params => {
      this.user = params['people'];
      console.log('members:', this.peopleOwner);
      this.repositoriesService.findRopositoryOwner(this.user)
      .then(own => {
        this.peopleOwner = own;
      })
      .catch( error => console.log('members error:', error));
  });
  }

}
