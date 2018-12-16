import { gql } from 'apollo-boost';

export const INDEX_QUERY = gql`
{
  categories{
    name
    id
  }
	onSale: products(where:{ sale: true }) {
    id
    name
    subtitle
    price
    photo {
      url
    }
  }
  allProducts: products(where:{ sale: null }) {
    id
    name
    subtitle
    price
    photo {
      url
    }
  }
}
`;