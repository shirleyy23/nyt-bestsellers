import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './modules/core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from 'GraphQL/graphql.module';
import { StoreModule } from '@ngrx/store';
import { AppReducer } from './app.reducer';
import { BooksModule } from 'App/modules/books/books.module';
import { DetailsModule } from 'Details/details.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    GraphQLModule,
    BooksModule,
    DetailsModule,
    StoreModule.forRoot(AppReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
