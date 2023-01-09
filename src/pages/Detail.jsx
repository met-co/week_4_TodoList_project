import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch ,useSelector} from 'react-redux';
import { useEffect } from 'react';
import { getTodoById } from '../redux/modules/todos';
import styled from "styled-components";


function Detail() {
  const param = useParams();
  

  const todo = useSelector((state) => state.todos.todo);


  const dispatch = useDispatch();

  const navigate = useNavigate();


  useEffect(() => {
    dispatch(getTodoById(param.id));
  }, [dispatch, param.id]);


  return (
  <StContainer>
    <StDialog>
      <div>
      <StDialogHeader>
      <div>ID : {todo.id}</div>
      <StButton onClick={()=> {navigate("/")}}>이전으로</StButton>
      </StDialogHeader>
      <StContents>
          <h2>{todo.title}</h2>
          <div>{todo.content}</div>
      </StContents>
      </div>
    </StDialog>
  </StContainer>
  );
  }

export default Detail;

const StContainer = styled.div`
  font-family: "Gowun Dodum", sans-serif; 
  border: 2px solid #eee;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StDialog = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StDialogHeader = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
  & > div {
    color : #224B0C;
  }
`;

const StContents = styled.div`
  & > h2 {
  padding: 0 24px;
  }
  & > div {
  padding: 0 24px;
  }
`;

const StButton = styled.button`
  border: 1px solid #57837B;
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
  color : #515E63;
`;
