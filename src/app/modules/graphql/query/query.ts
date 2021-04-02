import { gql } from 'apollo-angular';
export const combinedFictionListQuery = gql`
query {
	combinedFictionList {
		results {
			books {
				description
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
			}
		}
	}
}
`