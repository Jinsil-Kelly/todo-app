import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const INSERT = 'todos/INSERT'; // 새로운 todo 를 등록함
const TOGGLE = 'todos/TOGGLE'; // todo 를 체크/체크해제 함
const REMOVE = 'todos/REMOVE'; // todo 를 제거함

let id = 1; // insert 가 호출 될 때마다 1씩 더해집니다.
export const insert = createAction(INSERT, text => ({
  id: id++,
  text,
  checked: false,
}));

export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

const initialState = {
  todos: [
    // {
    //   id: 1,
    //   text: 'TDD 배우기',
    //   checked: true,
    // },
    // {
    //   id: 2,
    //   text: 'react-testing-library 배우기',
    //   checked: false,
    // },
  ],
};
const todos = handleActions(
  {
    [INSERT]: (state, { payload: todo }) =>
      produce(state, draft => {
        draft.todos.push(todo);
      }),
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, draft => {
        const todo = draft.todos.find(todo => todo.id === id);
        todo.checked = !todo.checked;
      }),
    [REMOVE]: (state, { payload: id }) =>
      produce(state, draft => {
        const index = draft.todos.findIndex(todo => todo.id === id);
        draft.todos.splice(index, 1);
      }),
  },
  initialState,
);

export default todos;
