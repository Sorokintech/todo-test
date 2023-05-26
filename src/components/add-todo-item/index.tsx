import * as S from "./style";
import "../../localize/config";
import React, { ChangeEvent } from "react";
import todo from "../../store/todo";
import { useTranslation } from "react-i18next";

export const AddTodoItem: React.FC = () => {
  const [newTodo, setNewTodo] = React.useState("");
  const { t } = useTranslation();
  return (
    <S.Wrapper>
      <S.AddInputLabel>
        <S.AddInput
          type="text"
          placeholder={t("input")}
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
        {t("button")}
      </S.AddButton>
    </S.Wrapper>
  );
};
