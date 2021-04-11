import { AppState } from './app.state';
import * as coreReducer from 'Core/reducers/core.reducers';
import { ActionReducerMap } from '@ngrx/store';


export const AppReducer: ActionReducerMap<AppState> = {
	coreState: coreReducer.reducer
};