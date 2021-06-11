import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  border-collapse: collapse;
  text-align: left;
  width: 50%;
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

const CountryTable = ({ data }) => {
  const { continents } = data;
  const [objData] = continents;
  return (
    <Table>
      <Caption>{objData.name}</Caption>
      <thead>
        <tr>
          <th>Code</th>
          <th>Name</th>
          <th>Native</th>
          <th>Capital</th>
          <th>Currency</th>
          <th>Languages</th>
        </tr>
      </thead>
      <tbody>
        {objData.countries.map((item) => (
          <tr key={item.code}>
            <td>{item.code}</td>
            <td>{item.name}</td>
            <td>{item.native}</td>
            <td>{item.capital}</td>
            <td>{item.currency}</td>
            <td>
              {item.languages?.map((lang) => (
                <p key={lang.name}>{lang.name}</p>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CountryTable;
