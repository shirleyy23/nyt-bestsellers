import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'Core/core.module';
import { BooksMainPanel } from 'App/modules/books/containers/books-main-panel/books-main-panel.container';
import { BooksPreview } from 'App/modules/books/components/books-preview/books-preview.component';

@NgModule({
  declarations: [
    BooksMainPanel,
    BooksPreview,
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  providers: [],
  bootstrap: []
})
export class BooksModule { }