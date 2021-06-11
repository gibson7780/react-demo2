import React from 'react';
import TableCountres from '../components/table/TableCountres';
import { gql, useQuery } from '@apollo/client';

const Countries = gql`
  query ($code: String!) {
    continents(filter: { code: { eq: $code } }) {
      code
      name
      countries {
        code
        name
        native
        capital
        currency
        languages {
          code
          name
          native
          rtl
        }
      }
    }
  }
`;

const Index = (props) => {
  const { location } = props;
  const { loading, error, data } = useQuery(Countries, {
    variables: { code: location.pathname.split('/')[1] },
  });

  return (
    <div>
      {loading && 'loading...'}
      {error && 'error'}
      {data && <TableCountres data={data} />}
    </div>
  );
};

export default Index;
