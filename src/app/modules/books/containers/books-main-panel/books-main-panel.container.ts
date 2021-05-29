import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { combinedNonFictionQuery, combinedFictionListQuery } from 'GraphQL/query/query'
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { sendBook } from 'Core/actions/core.actions';
import { Book , StoredSubscriptions, FullBookListDataBlock} from 'Core/models/models';
import { APIService } from 'GraphQL/service/API.service';
import { FullListTypes } from 'App/modules/graphql/models/models';
import { Subscription } from 'rxjs';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
@Component({
	selector: 'books-main-panel',
	templateUrl: './books-main-panel.container.html',
	styleUrls: ['./books-main-panel.container.scss'],
	encapsulation: ViewEncapsulation.Emulated
})

export class BooksMainPanel implements OnInit, OnDestroy {
	constants = {
		queryTypes: FullListTypes
	}
	subscriptions: StoredSubscriptions = {
		combinedFictionListSub: Subscription.EMPTY,
		combinedNonFictionListSub: Subscription.EMPTY
	}
	bookListData: FullBookListDataBlock = {
		[FullListTypes.combinedFictionList]: [],
		[FullListTypes.combinedNonFictionList]: [],
		selectedList: []
	}
	isToggleSwitch: boolean = false;
	constructor(
		private router: Router,
		private store: Store<any>,
		private apiService: APIService
	) {};

	ngOnInit() {
		this.subscriptions.combinedFictionListSub = this.apiService.getFullListData(combinedFictionListQuery, this.constants.queryTypes.combinedFictionList, this.bookListData);
	}

	ngOnDestroy() {
		for (let eachSub in this.subscriptions) {
			this.subscriptions[eachSub].unsubscribe();
		}
	}

	public showDetails(bookDetails: Book) {
		this.router.navigate([`details/${bookDetails.title}`]);
		const selectedBook: Book = {...bookDetails}
		this.store.dispatch(sendBook(selectedBook))
	}
}
