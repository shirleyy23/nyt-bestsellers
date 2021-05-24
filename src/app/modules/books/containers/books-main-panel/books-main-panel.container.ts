import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { combinedNonFictionQuery } from 'GraphQL/query/query'
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { sendBook } from 'Core/actions/core.actions';
import { Book } from 'Core/models/frontend/frontend-models';
type Response = {
  combinedNonFictionList : {
    results : {
      books: Book[];
    }
  }
}

@Component({
	selector: 'books-main-panel',
	templateUrl: './books-main-panel.container.html',
	styleUrls: ['./books-main-panel.container.scss'],
	encapsulation: ViewEncapsulation.Emulated
})

export class BooksMainPanel implements OnInit {
	results: Book[] = [];
	constructor(
		private apollo: Apollo,
		private router: Router,
		private store: Store<any>
	) {};
	ngOnInit() {
		this.apollo
		.watchQuery<Response>({
			query: combinedNonFictionQuery
		})
		.valueChanges.subscribe(result => {
			const { books: description } = result.data.combinedNonFictionList.results;
			this.results = description;
	})
	}

	public showDetails(bookDetails: Book) {
		this.router.navigate([`details/${bookDetails.title}`]);
		const selectedBook: Book = {...bookDetails}
		this.store.dispatch(sendBook(selectedBook))
	}
}
