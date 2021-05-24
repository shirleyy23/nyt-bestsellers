import { createReducer, on, Action } from '@ngrx/store';

import { sendBook } from 'Core/actions/core.actions';

import { CoreState } from 'Core/models/frontend/frontend-models';

export const initialState: CoreState = {
	selectedBook: {
		rank: 0,
		rank_last_week: 0,
		weeks_on_list: 0,
		publisher: '',
		description: '',
		title: '',
		author: '',
		book_image: '',
		book_image_width: 0,
		book_image_height: 0,
		book_review_link: '',
		first_chapter_link: '',
		buy_links: []
	}
};

const coreReducer = createReducer(
	initialState,
	on(sendBook, (state, selectedBook) => (
		{
			...state,
			selectedBook: {...selectedBook}
		}
	))
);

export function reducer(state: CoreState | undefined, action: Action) {
	return coreReducer(state, action);
}