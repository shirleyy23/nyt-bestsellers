import { Book } from 'Core/models/models';

export const LOADING_DATA: Book = {
	rank: 1,
	rank_last_week: 1,
	weeks_on_list: 1,
	publisher: 'Test publisher',
	description: 'Test description',
	title: 'Test Title',
	author: 'Test Author',
	book_image: 'test.jpg',
	book_image_width: 300,
	book_image_height: 500,
	book_review_link: '',
	first_chapter_link: '',
	buy_links: [],
}

export const LOADING_DATA_ITEM_LIMIT = 6;

export const LOADING_DATA_DELAY = 2000;