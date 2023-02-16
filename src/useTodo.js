import { useState } from "react";
import { v4 as uuid } from "uuid";
import produce from "immer";

const useTodo = () => {
  const [todo, setTodo] = useState([]);
  const [selectedTodoId, setSelectedTodoId] = useState("");

  const idx = todo.findIndex((item) => selectedTodoId === item.id);
  const addSubTask = (value) => {
    setTodo(
      produce((draft) => {
        draft[idx].subTasks.push({ title: value, id: uuid() });
      })
    );
  };

  const deleteSubTask = (subTaskId) => {
    setTodo(
      produce((draft) => {
        draft[idx].subTasks = draft[idx].subTasks.filter(
          (item) => item.id !== subTaskId
        );
      })
    );
  };
  const editSubTask = () => {};

  const addTodo = (value) => {
    setTodo(
      produce((draft) => {
        draft.push({ id: uuid(), title: value, subTasks: [] });
      })
    );
  };
  const deleteTodo = (id) => {
    let newTodo = todo.filter((item) => item.id !== id);
    setTodo(newTodo);
    setSelectedTodoId("");
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
    deleteTodo,
    edit,
    selectedTodoId,
    setSelectedTodoId,
    addSubTask,
    deleteSubTask,
  };
};

export default useTodo;
