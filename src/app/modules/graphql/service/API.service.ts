import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { FullListResponse, FullListTypes } from 'GraphQL/models/models';
import { Book } from 'Core/models/frontend/frontend-models';
import { DocumentNode } from 'graphql';
import { Subscription } from 'rxjs';
@Injectable({
  providedIn: 'root',
})

export class APIService {

  constructor(private apollo: Apollo) { }

	public getFullListData(query: DocumentNode, queryType: FullListTypes, booksList: Book[]): Subscription {
		return this.apollo
		.watchQuery<FullListResponse>({
			query
		})
		.valueChanges
		.subscribe(result => {
			const { books } = result.data[queryType].results;
			if (books.length > 0) {
				books.forEach((book: Book) => booksList.push(book));
			}
		})
	}

}