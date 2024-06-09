import { gql } from 'graphql-request';
import { hygraph } from '../lib/utils/hygraph.';

export async function load() {
	let query = gql`
		query Assets {
			landingPages {
				content
				quote
				package1
				package2
				package3
				package1Description
				package2Description
				package3Description
			}
		}
	`;

	return await hygraph.request(query);
}
