import React from "react";
import { deleteTodo, toggleStatusTodo } from "../redux/modules/todos";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Todo = ({ todoData }) => {
  const dispatch = useDispatch();

  const deleteTodoHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const onEditHandler = (id) => {
    dispatch(toggleStatusTodo(id));
  };

  return (
    <StTodoContainer>
      <div>
        <StLink to={`/${todoData.id}`} key={todoData.id}>
          <div>상세보기</div>
        </StLink>
      </div>
      <div>
        <h2>{todoData.title}</h2>
        <div>{todoData.content}</div>
      </div>
      <StButtonContainer>
        <StButton
          borderColor="red"
          type="button"
          onClick={() => {
            deleteTodoHandler(todoData.id);
          }}
        >
          삭제하기
        </StButton>
        <StButton
          borderColor="green"
          type="button"
          onClick={() => {
            onEditHandler(todoData.id);
          }}
        >
          {todoData.isDone === false ? "완료" : "취소"}
        </StButton>
      </StButtonContainer>
    </StTodoContainer>
  );
};

export default Todo;

const StLink = styled(Link)`
  text-decoration: none;
  color: #926e6f;
`;

const StTodoContainer = styled.div`
  width: 280px;
  height: 210px;
  border: 3px solid #8b7e74;
  border-radius: 20px;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  -ms-border-radius: 20px;
  -o-border-radius: 20px;
  padding: 12px 24px;
  & > h2 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
  }
  & > div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
  }
`;

const StButtonContainer = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 12px;
  justify-content: space-between;
`;

const StButton = styled.button`
  width: 130px;
  height: 40px;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
  background-color: white;
  border: 2px solid ${({ borderColor }) => borderColor};
  cursor: pointer;
`;
