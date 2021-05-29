import { createAction, props } from '@ngrx/store';
import { Book } from 'Core/models/models';

export const sendBook = createAction(
	'[Core] Send Book',
	props<Book>()
);