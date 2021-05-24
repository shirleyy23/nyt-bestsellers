import { Component, OnInit, OnDestroy, ViewEncapsulation} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectedBookForDetailDisplay } from 'Core/selectors/core.selectors'; 
import { Book, StoredSubscriptions } from 'Core/models/frontend/frontend-models';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { Buttons, Links } from 'Core/models/frontend/frontend-constants';

@Component({
	selector: 'details-main-panel',
	templateUrl: './details-main-panel.container.html',
	styleUrls: ['./details-main-panel.container.scss'],
	encapsulation: ViewEncapsulation.Emulated
})

export class DetailsMainPanel implements OnInit, OnDestroy {
	subscriptions: StoredSubscriptions = {
		bookSub: Subscription.EMPTY
	}
	book$: Book | null = null;
	constants = {
		type: {
			inline: Links.inline,
			primary: Buttons.primary,
			secondary: Buttons.secondary
		}
	}
	constructor(
		private store$: Store<any>,
		private route: ActivatedRoute
	) {};
	ngOnInit():void {
		this.subscriptions.bookSub = this.store$.select(selectedBookForDetailDisplay).subscribe((book: Book) => book ? this.book$ = book : this.book$ = null);

		console.log(this.book$, 'book')
	}

	ngOnDestroy(): void {
		for (let eachSub in this.subscriptions) {
			this.subscriptions[eachSub].unsubscribe();
		}
	}
}