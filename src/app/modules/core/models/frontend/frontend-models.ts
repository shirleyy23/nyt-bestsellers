import { Subscription } from "rxjs";

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

export interface CoreState {
	selectedBook: Book;
}

export interface StoredSubscriptions {
	[key: string]: Subscription;
}