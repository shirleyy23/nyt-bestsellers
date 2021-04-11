import { createAction, props } from '@ngrx/store';
import { Book } from 'Core/models/frontend/frontend-models';

export const sendBook = createAction(
	'[Core] Send Book',
	props<Book>()
);