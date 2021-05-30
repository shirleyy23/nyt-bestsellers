import { Component, Input, OnInit, OnChanges, ViewEncapsulation } from '@angular/core';
import { Book, Links, Buttons, BookPreviewState } from 'Core/models/models';
import { Store } from '@ngrx/store';
import { sendBook } from 'Core/actions/core.actions';

@Component({
	selector: 'books-preview',
	templateUrl: './books-preview.component.html',
	styleUrls: ['./books-preview.component.scss'],
	encapsulation: ViewEncapsulation.Emulated
})

export class BooksPreview implements OnInit, OnChanges {
	@Input() book: Book = {} as Book;
	@Input() loadingState: boolean = false;
	constants = {
		linkTypes: {
			inline: Links.inline,
			primary: Buttons.primary,
			secondary: Buttons.secondary
		},
		previewTextLimit: 100
	}
	state: BookPreviewState = this.initializeState();
	constructor(
		private store$: Store<any>
	) {}

	public ngOnInit(): void {
		this.state.bookDetails = this.book;
		if (this.state.bookDetails) {
			this.state.url = this.parseTitleForURL(this.state.bookDetails.title);
			this.state.isNew = !this.state.bookDetails.rank_last_week;
			this.state.previewDescription = this.formatPreviewText(this.state.bookDetails.description);
		}
	}

	public ngOnChanges(): void {
		this.state.loadingState = this.loadingState;
	}
	public sendBookDataToDetails():void {
		this.store$.dispatch(sendBook(this.state.bookDetails));
	}

	private initializeState(): BookPreviewState {
		return {
			bookDetails: this.book,
			url: '',
			isNew: false,
			previewDescription: '',
			loadingState: this.loadingState
		}
	}

	private parseTitleForURL(title: string): string {
		const urlTitle = title.split(' ').join('-').toLowerCase();
		const fullURL = `details/${urlTitle}`;
		return fullURL;
	}

	private formatPreviewText(value: string): string {
		return  value.length > this.constants.previewTextLimit ? `${value.substring(0,100)}...` : value;
	}
}