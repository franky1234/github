import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {RepositoryComponent} from '../repositories/repositories.component';
import {RepositoriesModule} from '../repositories/repositories.module';
import { FormsModule } from '@angular/forms';
import { PeoplesModule } from '../peoples/peoples.module';
import {AppRoutingModule } from '../app-routing.module';
import { TeamsModule } from '../teams/teams.module';
import { SettingsModule } from '../settings/settings.module';

@NgModule({
  imports: [
    CommonModule,
    RepositoriesModule,
    PeoplesModule,
    FormsModule,
    AppRoutingModule,
    TeamsModule,
    SettingsModule
  ],
  declarations: [LoginComponent, HomeComponent, RepositoryComponent]
})
export class UsersModule { }
