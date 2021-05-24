import { gql } from 'apollo-angular';
export const combinedFictionListQuery = gql`
query {
	combinedFictionList {
		results {
			books {
				description
				title
				rank
				rank_last_week
				publisher
				author
				book_image
				book_image_width
				book_image_height
				book_review_link
				first_chapter_link
				buy_links {
					name
					url
				}
			}
		}
	}
}
`
export const combinedNonFictionQuery = gql`
query {
	combinedNonFictionList {
		results {
			books {
				description
				title
				rank
				rank_last_week
				publisher
				author
				book_image
				book_image_width
				book_image_height
				book_review_link
				first_chapter_link
				buy_links {
					name
					url
				}
			}
		}
	}
}
`