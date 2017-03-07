import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './users/login/login.component';
import {HomeComponent} from './users/home/home.component';
import { RepositoryComponent} from './repositories/repositories.component';
import { MembersComponent} from './peoples/members/members.component';
import { GroupsComponent } from './teams/groups/groups.component';
import { ProfileComponent } from './settings/profile/profile.component';
const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home/:name', component: HomeComponent, children: [
        {
          path: '',
          redirectTo: 'repositories',
          pathMatch : 'full'
        },
        {
            path: 'repositories',
            component: RepositoryComponent,
        },
         {
            path: 'peoples',
            component: MembersComponent
         },
         {
            path: 'teams',
            component: GroupsComponent
         },
         {
            path: 'settings',
            component: ProfileComponent
         }
    ] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
