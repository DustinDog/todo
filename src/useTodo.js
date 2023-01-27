import { useState } from "react";
import { v4 as uuid } from "uuid";
import produce from "immer";

const useTodo = () => {
  const [todo, setTodo] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState({});

  const idx = todo.findIndex(({ id }) => selectedTodo.id === id);
  const addSubTask = (value) => {
    setTodo(
      produce((draft) => {
        draft[idx].subTasks.push({ title: value, id: uuid() });
      })
    );
  };

  const addTodo = (value) => {
    setTodo(
      produce((draft) => {
        draft.push({ id: uuid(), title: value, subTasks: [] });
      })
    );
  };
  const edit = (value) => {
    setTodo(
      produce((draft) => {
        draft[idx].title = value;
      })
    );
  };
  return {
    todo,
    setTodo,
    addTodo,
    edit,
    selectedTodo,
    setSelectedTodo,
    addSubTask,
  };
};

export default useTodo;
