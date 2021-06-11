import React from 'react';
import { gql, useQuery } from '@apollo/client';
import TableContinents from '../table/TableContinents';
const Continents = gql`
  query ($filter: ContinentFilterInput) {
    continents(filter: $filter) {
      code
      name
      countries {
        code
        name
      }
    }
  }
`;

const Continent = () => {
  const { loading, error, data } = useQuery(Continents);
  return (
    <div>
      {loading && <p>loading...</p>}
      {error && <p>error</p>}
      {data && <TableContinents data={data.continents} />}
    </div>
  );
};
export default Continent;
