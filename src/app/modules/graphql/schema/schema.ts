const { gql } = require('apollo-server-lambda');

const schemaTypeDefs = gql`
	type Query {
		combinedFictionList: FullListData
		combinedNonFictionList: FullListData
	}
	type Review {
		url: String
		publication_dt: String
		byline: String
		book_title: String
		book_author: String
		summary: String
		uuid: String
		uri: String
		isbn13: [String]
	}
	type Reviews {
		status: String
		copyright: String
		num_results: Int
		results: [Review]
	}
	type BuyLinks {
		name: String
		url: String
	}
	type Book {
		rank: Int
		rank_last_week: Int
		weeks_on_list: Int
		publisher: String
		description: String
		title: String
		author: String
		book_image: String
		book_image_width: Int
		book_image_height: Int
		book_review_link: String
		first_chapter_link: String
		buyLinks: [BuyLinks]
	}
	type Results {
		books: [Book]
	}
	type FullListData {
		copyright: String
		results: Results
	}
`;

module.exports = schemaTypeDefs;
