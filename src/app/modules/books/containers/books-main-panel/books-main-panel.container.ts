import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { combinedNonFictionQuery, combinedFictionListQuery } from 'GraphQL/query/query'
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { sendBook } from 'Core/actions/core.actions';
import { Book , StoredSubscriptions, BookPanelState, BooklistTypes} from 'Core/models/models';
import { APIService } from 'GraphQL/service/API.service';
import { FullListTypes } from 'App/modules/graphql/models/models';
import { Subscription } from 'rxjs';
import { faPlus, faTimes, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { LOADING_DATA, LOADING_DATA_ITEM_LIMIT, LOADING_DATA_DELAY } from 'Core/models/constants';
@Component({
	selector: 'books-main-panel',
	templateUrl: './books-main-panel.container.html',
	styleUrls: ['./books-main-panel.container.scss'],
	encapsulation: ViewEncapsulation.Emulated
})

export class BooksMainPanel implements OnInit, OnDestroy {
	constants = {
		queryTypes: FullListTypes,
		booklistTypes: BooklistTypes,
		icons: {
			main: faBookOpen,
			expand: faPlus,
			collapse: faTimes,
		},
		skeleton: {
			exampleData: LOADING_DATA,
			itemLimit: LOADING_DATA_ITEM_LIMIT,
			delay: LOADING_DATA_DELAY
		}
	}
	subscriptions: StoredSubscriptions = {
		combinedFictionListSub: Subscription.EMPTY,
		combinedNonFictionListSub: Subscription.EMPTY
	}
	state: BookPanelState = this.initializeState();
	constructor(
		private router: Router,
		private store: Store<any>,
		private apiService: APIService
	) {};

	ngOnInit() {
		this.state.bookList.selectedList = this.createLoadingUI(this.constants.skeleton.itemLimit, this.constants.skeleton.exampleData);
		setTimeout(() => {
			this.subscriptions.combinedFictionListSub = this.apiService.getFullListData(combinedFictionListQuery, this.constants.queryTypes.combinedFictionList, this.state.bookList, this.state.api);
		}, this.constants.skeleton.delay)
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

	public onToggleSwitch() {
		this.state.switch.isExpanded = !this.state.switch.isExpanded;
		this.state.switch.btnIcon = this.state.switch.isExpanded ? this.constants.icons.collapse : this.constants.icons.expand;
	}

	public onClickSwitchList(altList: BooklistTypes) {
		const bookListData = altList === this.constants.booklistTypes.nonFiction ? this.constants.queryTypes.combinedNonFictionList : this.constants.queryTypes.combinedFictionList;
		if (this.state.bookList[bookListData].length > 0) {
			this.state.api.isLoading = true;
			setTimeout(() => {
				this.state.bookList.selectedList = this.state.bookList[bookListData];
				this.state.api.isLoading = false;
			}, 2000)
		} else {
			const query = bookListData === this.constants.queryTypes.combinedNonFictionList ? combinedNonFictionQuery : combinedFictionListQuery;
			this.apiService.getFullListData(query, bookListData, this.state.bookList, this.state.api);
		}
		this.state.switch.selectedList = altList;
		this.state.switch.alternateList = altList === this.constants.booklistTypes.nonFiction ? this.constants.booklistTypes.fiction : this.constants.booklistTypes.nonFiction;
	}

	private initializeState(): BookPanelState {
		return {
			bookList: {
				[FullListTypes.combinedFictionList]: [],
				[FullListTypes.combinedNonFictionList]: [],
				selectedList: []
			},
			switch: {
				isExpanded: false,
				selectedList: this.constants.booklistTypes.fiction,
				alternateList: this.constants.booklistTypes.nonFiction,
				btnIcon: this.constants.icons.expand
			},
			api: {
				isLoading: true,
				fetchedData: false
			}
		}
	}

	private createLoadingUI(limit: number, exampleData: Book): Book[] {
		const skeletonData: Book[] = [];
		for (let i = 0; i < limit; i++) {
			skeletonData.push(exampleData)
		}
		return skeletonData;
	}
}
