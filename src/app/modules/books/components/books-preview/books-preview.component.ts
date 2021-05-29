import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Book } from 'Core/models/models';
import { Links, Buttons } from 'Core/models/constants';
import { Store } from '@ngrx/store';
import { sendBook } from 'Core/actions/core.actions';

@Component({
	selector: 'books-preview',
	templateUrl: './books-preview.component.html',
	styleUrls: ['./books-preview.component.scss'],
	encapsulation: ViewEncapsulation.Emulated
})

export class BooksPreview implements OnInit {
	public bookDetails: Book = {} as Book;
	public url: string = '';
	isNew: boolean = false;
	previewDescription: string = '';
	@Input() book: Book = {} as Book;
	constants = {
		linkTypes: {
			inline: Links.inline,
			primary: Buttons.primary,
			secondary: Buttons.secondary
		},
		previewTextLimit: 100
	}
	constructor(
		private store$: Store<any>
	) {}
	ngOnInit() {
		this.bookDetails = this.book;
		if (this.bookDetails) {
			this.url = this.parseTitleForURL(this.bookDetails.title);
			this.isNew = !this.bookDetails.rank_last_week;
			this.previewDescription = this.formatPreviewText(this.bookDetails.description);
		}
	}
	public sendBookDataToDetails():void {
		this.store$.dispatch(sendBook(this.bookDetails));
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