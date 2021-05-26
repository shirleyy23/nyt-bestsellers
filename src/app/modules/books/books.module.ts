import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'Core/core.module';
import { BooksMainPanel } from 'App/modules/books/containers/books-main-panel/books-main-panel.container';
import { BooksPreview } from 'App/modules/books/components/books-preview/books-preview.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    BooksMainPanel,
    BooksPreview,
  ],
  imports: [
    CommonModule,
    CoreModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: []
})
export class BooksModule { }