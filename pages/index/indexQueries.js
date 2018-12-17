import { gql } from 'apollo-boost';
import { PRODUCT_FRAGMENT } from '../../fragments';

export const INDEX_QUERY = gql`
{
  categories{
    name
    id
  }
	onSale: products(where:{ sale: true }) {
    ...ProductItems
  }
  allProducts: products(where:{ sale: null }) {
    ...ProductItems
  }
}
${PRODUCT_FRAGMENT}
`;