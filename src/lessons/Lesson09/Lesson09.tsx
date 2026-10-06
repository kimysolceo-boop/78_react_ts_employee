import { useState, type ChangeEvent } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import ToDoList from "../../components/ToDoList/ToDoList";

import {
  PageWrapper,
  Lesson09Wrapper,
  Title,
} from "./styles";


function Lesson09() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const addTodo = () => {
    if (inputValue === "") {
      alert("Enter a task");
      return;
    }

    setTodos([inputValue, ...todos]);
    setInputValue("");
  };

  const deleteTodo = (todoIndex: number) => {
  const updatedTodos = [...todos];
  updatedTodos.splice(todoIndex, 1);
  setTodos(updatedTodos);
  };


  return (
  <PageWrapper>
    <Lesson09Wrapper>
      <Title>ToDo List</Title>

      <Input
        name="todo"
        label="New task"
        placeholder="Enter new task"
        value={inputValue}
        onChange={onChangeValue}
      />

      <Button name="Add" onClick={addTodo} />

      <ToDoList todos={todos} deleteTodo={deleteTodo} />
    </Lesson09Wrapper>
  </PageWrapper>
);
}
export default Lesson09;