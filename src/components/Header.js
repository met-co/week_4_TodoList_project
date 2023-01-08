import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StContainer>
      <div>My Todo List</div>
    </StContainer>
  );
};

export default Header;

const StContainer = styled.div`
  height: 60px;
  padding: 5px 15px;
  border: 1px solid lightgray;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  color: #355764;
  background-color: #fffbe9;
`;
