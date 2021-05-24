import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksMainPanel } from 'App/modules/books/containers/books-main-panel/books-main-panel.container';
import { DetailsMainPanel } from 'Details/containers/details-main-panel.container';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BooksMainPanel
  },
  {
    path: 'details/:title',
    component: DetailsMainPanel
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
