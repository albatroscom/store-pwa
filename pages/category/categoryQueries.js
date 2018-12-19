import { gql } from 'apollo-boost';
import { PRODUCT_FRAGMENT } from '../../fragments';

export const CATEGORY_QUERY = gql`
    query categoryQuery($name: String) 
    {
        categories{
            name
            id
        }
        allProducts: products(where:{ categories_some:{ name: $name} }) {
            ...ProductItems
        }
    }
    ${PRODUCT_FRAGMENT}
`;