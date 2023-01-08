import React from "react";
import Header from "./Header";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <StWrap>
      <Header />
      {children}
    </StWrap>
  );
};
export default Layout;

const StWrap = styled.div`
  font-family: "Gowun Dodum", sans-serif;
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;
