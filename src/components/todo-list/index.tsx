import * as S from "./style";
import React from "react";
import { observer } from "mobx-react-lite";
import todo from "../../store/todo";
import { EditTodoModal } from "../modal";
import { ThemeProvider } from "styled-components";
import "../../localize/config";
import { useTranslation } from "react-i18next";

export const TodoList: React.FC = observer(() => {
  const [isModalOpen, setModalState] = React.useState(false);
  //Content to pass to modal component
  const [todoContent, setTodoContent] = React.useState("");
  //Id to pass to modal component
  const [todoId, setTodoId] = React.useState(0);
  //Function that toggle edit modal
  const toggleModal = (text: string, id: number) => {
    setModalState(!isModalOpen);
    setTodoContent(text);
    setTodoId(id);
  };
  //language change
  const { t } = useTranslation();
  //styles theme change upon todo status : DONE/UNDONE
  const toBeDone = {
    main: "#ffffcc",
    text: "none",
  };
  const done = {
    main: "#b3ffb3",
    text: "line-through",
  };
  return (
    <S.Wrapper>
      <S.Container>
        <S.SortContainer>
          {todo.TodoArr.length > 1 ? (
            <S.Icon
              src={"/icons/sort.png"}
              onClick={() => {
                todo.sortTodo(todo.TodoArr);
              }}
            ></S.Icon>
          ) : (
            ""
          )}
        </S.SortContainer>
        {todo.TodoArr.map((item) => {
          return (
            <ThemeProvider theme={!item.completed ? toBeDone : done}>
              <S.Item key={item.id}>
                <S.Icon
                  src={!item.completed ? "/icons/box.png" : "/icons/undo.png"}
                  onClick={() => todo.doneTodo(item.id)}
                ></S.Icon>
                <S.Icon
                  src={
                    !item.completed
                      ? "/icons/edit.png"
                      : "/icons/check-mark.png"
                  }
                  onClick={() => {
                    if (!item.completed) {
                      toggleModal(item.title, item.id);
                    }
                  }}
                ></S.Icon>
                <p>{item.title}</p>

                <S.Icon
                  src={"/icons/delete.png"}
                  onClick={() => todo.deleteTodo(item.id)}
                ></S.Icon>
              </S.Item>
            </ThemeProvider>
          );
        })}
        <EditTodoModal
          id={todoId}
          title={t("modal")}
          isOpen={isModalOpen}
          onClose={() => {
            toggleModal(todoContent, todoId);
          }}
          content={todoContent}
        ></EditTodoModal>
      </S.Container>
    </S.Wrapper>
  );
});
