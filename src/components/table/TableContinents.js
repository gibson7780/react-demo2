import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Table = styled.table`
  border-collapse: collapse;
  text-align: left;
  width: 25%;
  thead th {
    padding: 10px;
    background: #ccc;
  }
  tbody td {
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
`;
const Caption = styled.caption`
  text-align: left;
  font-size: 40px;
`;
const TableContinents = ({ data }) => {
  return (
    <Table>
      <Caption>Continents</Caption>
      <thead>
        <tr>
          <th>Code</th>
          <th>Name</th>
          <th>Num of Countries</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.code}>
            <td>{item.code}</td>
            <td>
              <Link to={`${item.code}`}>{item.name}</Link>
            </td>
            <td>{item.countries?.length}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableContinents;
