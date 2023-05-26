import * as S from "./style";
import React, { ChangeEvent } from "react";
import todo from "../../store/todo";

export const AddTodoItem: React.FC = () => {
  const [newTodo, setNewTodo] = React.useState("");
  return (
    <S.Wrapper>
      <S.AddInputLabel>
        <S.AddInput
          type="text"
          placeholder="Enter a todo"
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setNewTodo(event.target.value);
          }}
        ></S.AddInput>
      </S.AddInputLabel>
      <S.AddButton
        onClick={() =>
          todo.addTodo({
            id: todo.TodoArr.length + 1,
            title: newTodo,
            completed: false,
          })
        }
      >
        Add
      </S.AddButton>
    </S.Wrapper>
  );
};
