import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import styled from "styled-components";

const Input = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const addTodoHandler = (event) => {
    event.preventDefault();
    if (title.trim() === "" || content.trim() === "") return;
    const newTodo = {
      // id: id,
      title: title,
      content: content,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
    setTitle("");
    setContent("");
  };

  return (
    <StInputForm>
      <StInputGroup>
        <StFormLabel>제목</StFormLabel>
        <StInputStyle
          value={title}
          // placeholder="이름을 입력해주세요"
          // 인풋 이벤트로 들어온 입력 값을 title의 값으로 업데이트
          onChange={(e) => setTitle(e.target.value)}
        />
        <StFormLabel>내용</StFormLabel>
        <StInputStyle
          value={content}
          // placeholder="나이를 입력해주세요"
          // 인풋 이벤트로 들어온 입력 값을 content의 값으로 업데이트
          onChange={(e) => setContent(e.target.value)}
        />
      </StInputGroup>
      <StInputButton type="button" onClick={addTodoHandler}>
        추가하기
      </StInputButton>
    </StInputForm>
  );
};

export default Input;

const StInputForm = styled.form`
  height: 90px;
  background-color: #f4ead5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 30px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
`;

const StInputGroup = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 20px;
`;

const StFormLabel = styled.label`
  font-size: 20px;
  color: #395144;
`;

const StInputStyle = styled.input`
  border: none;
  border-radius: 8px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  -ms-border-radius: 8px;
  -o-border-radius: 8px;
  height: 40px;
  width: 230px;
`;

const StInputButton = styled.button`
  border: none;
  border-radius: 8px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  -ms-border-radius: 8px;
  -o-border-radius: 8px;
  height: 40px;
  width: 130px;
  color: white;
  background-color: #61876e;
  font-size: 18px;
  /* font-weight: bold; */
  cursor: pointer;
`;
