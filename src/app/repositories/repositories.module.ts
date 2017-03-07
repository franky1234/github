import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReposListComponent } from './repos-list/repos-list.component';
import { PeoplesListComponent } from './peoples-list/peoples-list.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ReposListComponent, PeoplesListComponent],
  exports: [ReposListComponent, PeoplesListComponent]
})
export class RepositoriesModule { }
