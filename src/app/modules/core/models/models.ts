import { Subscription } from "rxjs";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { FullListTypes } from "App/modules/graphql/models/models";

export interface Book {
	rank: number;
	rank_last_week: number;
	weeks_on_list: number;
	publisher: string;
	description: string;
	title: string;
	author: string;
	book_image: string;
	book_image_width: number;
	book_image_height: number;
	book_review_link: string;
	first_chapter_link: string;
	buy_links: BuyLink[];
}
export interface BuyLink {
	name: string;
	url: string;
}

export enum BooklistTypes {
	nonFiction = 'Non-Fiction',
	fiction = 'Fiction'
}

export interface BookPanelState {
	bookList: FullBookListDataBlock;
	switch: {
		isExpanded: boolean;
		selectedList: BooklistTypes;
		alternateList: BooklistTypes;
		btnIcon: IconDefinition;
	},
	api: {
		fetchedData: boolean;
	}
}

export interface BookPreviewState {
	bookDetails: Book;
	url: string;
	isNew: boolean;
	previewDescription: string;
	loadingState: boolean;
}

export interface CoreState {
	selectedBook: Book;
}
export interface StoredSubscriptions {
	[key: string]: Subscription;
}
export interface ChangeInRankingsBlock {
	amount: string;
	type: RankingTypes,
	icon: IconDefinition | null
}

export type DistinctBookListDataBlock = {
	[distinctList in FullListTypes]: Book[]
}

export interface FullBookListDataBlock extends DistinctBookListDataBlock {
	selectedList: Book[]
}

export enum Buttons {
	primary,
	secondary,
}

export enum Links {
	inline,
}

export type LinkType = Buttons | Links;

export enum Vendors {
	amazon = 'Amazon',
	appleBooks = 'Apple Books',
	barnesAndNoble = 'Barnes and Noble',
	booksAMillion = 'Books-A-Million',
	bookShop = 'Bookshop',
	indieBound = 'IndieBound'
}

export enum RankingTypes {
	positive = 'positive',
	negative = 'negative',
	neutral = 'neutral'
}