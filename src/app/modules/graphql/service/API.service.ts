import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { FullListResponse, FullListTypes } from 'GraphQL/models/models';
import { DataFetchingBlock, FullBookListDataBlock } from 'Core/models/models';
import { DocumentNode } from 'graphql';
import { Subscription } from 'rxjs';
@Injectable({
  providedIn: 'root',
})

export class APIService {

  constructor(private apollo: Apollo) { }

	public getFullListData(query: DocumentNode, queryType: FullListTypes, bookListData: FullBookListDataBlock, apiStatus: DataFetchingBlock): Subscription {
		apiStatus.isLoading = true;
		apiStatus.fetchedData = false;
		return this.apollo
		.watchQuery<FullListResponse>({
			query
		})
		.valueChanges
		.subscribe(result => {
			const { books } = result.data[queryType].results;
			if (books.length > 0) {
				bookListData[queryType] = books;
				bookListData.selectedList = books;
				apiStatus.isLoading = false;
				apiStatus.fetchedData = true;
			}
		})
	}

}