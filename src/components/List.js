import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";
import styled from "styled-components";

const List = () => {
  const todoData = useSelector((state) => state.todos.todoData);

  return (
    <StListSpace>
      <p>Working...🔥</p>
      <StListWrapper>
        {todoData.map((todoData) => {
          if (todoData.isDone === false) {
            return <Todo todoData={todoData} key={todoData.id} />;
          } else {
            return null;
          }
        })}
      </StListWrapper>
      <p>Done! 🎉</p>
      <StListWrapper>
        {todoData.map((todoData) => {
          if (todoData.isDone === true) {
            return <Todo todoData={todoData} key={todoData.id} />;
          } else {
            return null;
          }
        })}
      </StListWrapper>
    </StListSpace>
  );
};

export default List;

const StListSpace = styled.div`
  padding: 0 20px;
  & > p {
    color: #224b0c;
    font-size: 25px;
  }
`;

const StListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
