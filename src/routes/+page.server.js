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
			}
		}
	`;

	return await hygraph.request(query);
}
