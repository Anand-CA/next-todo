import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    delete_todo: (state, action) => {
      const todosJson = JSON.stringify(state.todos);
      const todos = JSON.parse(todosJson);
      var filteredTodos = todos.filter((t) => {
        return t._id != action.payload.id;
      });
      state.todos = filteredTodos;
    },
    add_todo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    update_todo: (state, action) => {
      console.log(action.payload);
      const todosJson = JSON.stringify(state.todos);
      const todos = JSON.parse(todosJson);
      var todo = todos.find((t) => {
        return t._id === action.payload.id;
      });
      console.log("todo ???", todo);
      todo.text = action.payload.text;
      state.todos = todos;
    },
  },
});

export const { setTodos, delete_todo, add_todo, update_todo } =
  todoSlice.actions;

export const selectTodo = (state) => state.todo.todos;

export default todoSlice.reducer;
