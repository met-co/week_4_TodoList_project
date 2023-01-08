// src/redux/modules/counter.js

// Action Value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";
const GET_TODO_BY_ID = "GET_TODO_BY_ID";

let id = 2;

// Action Creator
// todo 추가하기
export const addTodo = (payload) => {
  console.log({ ...payload }, "payload");
  return {
    type: ADD_TODO,
    payload: {
      id: id++,
      title: payload.title,
      content: payload.content,
      isDone: payload.isDone,
    },
  };
};

// todo 삭제하기
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload: payload,
  };
};

// isDone를 변경하는 action creator
export const toggleStatusTodo = (payload) => {
  return {
    type: TOGGLE_STATUS_TODO,
    payload: payload,
  };
};

// 상세 페이지에서 특정 Todo만 조회하는 action creator
export const getTodoById = (payload) => {
  return {
    type: GET_TODO_BY_ID,
    payload: payload,
  };
};

// Initial State
const initialState = {
  todoData: [
    {
      id: 1,
      title: "리액트 공부하기",
      content: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
  ],
  todo: {
    id: "0",
    title: "",
    content: "",
    isDone: false,
  },
};

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      console.log({ ...state }, "state");
      return {
        ...state,
        todoData: [...state.todoData, action.payload],
      };
    }
    case DELETE_TODO: {
      return {
        ...state,
        todoData: state.todoData.filter((todo) => todo.id !== action.payload),
      };
    }
    case TOGGLE_STATUS_TODO: {
      return {
        ...state,
        todoData: state.todoData.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          } else {
            return { ...todo };
          }
        }),
      };
    }
    case GET_TODO_BY_ID: {
      return {
        ...state,
        todo: state.todoData.find((todo) => {
          return todo.id === parseInt(action.payload);
        }),
      };
    }
    default:
      return state;
  }
};
// export defalut reducer
export default todos;
