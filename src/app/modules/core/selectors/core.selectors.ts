import { createSelector } from "@ngrx/store";
import { Book } from 'Core/models/models';
import { AppState } from 'App/app.state';

export const selectBook = (state: AppState ) => {
	return state.coreState.selectedBook
}

export const selectedBookForDetailDisplay = createSelector(
	selectBook,
	(selectedBook: Book) => ({...selectedBook})
)