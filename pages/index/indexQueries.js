import { gql } from 'apollo-boost';

export const INDEX_QUERY = gql`
{
  categories{
    name
    id
  }
	products(where:{
    sale:true
  })
  {
    id
    name
    description
    price
    photo {
      fileName
    }
  }
}
`;