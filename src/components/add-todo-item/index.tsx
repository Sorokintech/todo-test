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
          placeholder="Добавить задачу..."
          value={newTodo}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setNewTodo(event.target.value);
          }}
        ></S.AddInput>
      </S.AddInputLabel>
      <S.AddButton
        onClick={() => {
          if (newTodo !== "") {
            todo.addTodo({
              id: todo.TodoArr.length + 1,
              title: newTodo,
              completed: false,
            });
            setNewTodo("");
          }
        }}
      >
        Добавить
      </S.AddButton>
    </S.Wrapper>
  );
};
