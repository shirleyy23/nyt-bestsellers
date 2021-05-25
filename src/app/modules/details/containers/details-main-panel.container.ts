import { Component, OnInit, OnDestroy, ViewEncapsulation} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectedBookForDetailDisplay } from 'Core/selectors/core.selectors'; 
import { Book, StoredSubscriptions } from 'Core/models/frontend/frontend-models';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { Buttons, Links, RankingTypes } from 'Core/models/frontend/frontend-constants';
import { ChangeInRankingsBlock } from 'Core/models/frontend/frontend-models';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

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
	rankData: ChangeInRankingsBlock = {
		amount: '',
		type: RankingTypes.neutral,
		icon: null
	};
	constants = {
		linkTypes: {
			inline: Links.inline,
			primary: Buttons.primary,
			secondary: Buttons.secondary
		},
		rankingTypes: {
			positive: RankingTypes.positive,
			negative: RankingTypes.negative,
			neutral: RankingTypes.neutral
		}
	}
	constructor(
		private store$: Store<any>,
		private route: ActivatedRoute
	) {};

	ngOnInit():void {
		this.subscriptions.bookSub = this.store$.select(selectedBookForDetailDisplay).subscribe((book: Book) => book ? this.book$ = book : this.book$ = null);
		if (this.book$) {
			this.rankData = this.getRankingData(this.book$.rank, this.book$.rank_last_week);
			console.log(this.rankData, this.book$)
		}
	}

	ngOnDestroy(): void {
		for (let eachSub in this.subscriptions) {
			this.subscriptions[eachSub].unsubscribe();
		}
	}

	private getRankingData(currentRank: number, lastRank: number): ChangeInRankingsBlock {
		const rawAmount = lastRank ? currentRank - lastRank : 0;
		const type = rawAmount === 0 || !lastRank ? this.constants.rankingTypes.neutral : rawAmount < 0 ? this.constants.rankingTypes.positive : this.constants.rankingTypes.negative;
		const icon = type === this.constants.rankingTypes.positive ? faChevronUp : type === this.constants.rankingTypes.negative ? faChevronDown : null;
		const parsedAmount = rawAmount === 0 ? '-' : `${rawAmount}`;
		return {
			amount: parsedAmount,
			type,
			icon
		}
	}
}