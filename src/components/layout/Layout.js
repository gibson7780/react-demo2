import React from 'react';
import styled from 'styled-components';
import Continent from './Continent';

const Wrap = styled.div`
  padding: 50px;
`;

const Layout = ({ children }) => {
  return (
    <Wrap>
      <Continent />
      {children}
    </Wrap>
  );
};

export default Layout;
