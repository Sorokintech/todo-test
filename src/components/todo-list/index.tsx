import * as S from "./style";
import React, { useState, useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import todo from "../../store/todo";
import { EditTodoModal } from "../modal";

export const TodoList: React.FC = observer(() => {
  const [isModalOpen, setModalState] = React.useState(false);
  const [todoContent, setTodoContent] = React.useState("");
  const [todoId, setTodoId] = React.useState(0);
  const toggleModal = (text: string, id: number) => {
    setModalState(!isModalOpen);
    setTodoContent(text);
    setTodoId(id);
    console.log(text);
  };
  return (
    <S.Wrapper>
      <S.Container>
        <S.SortContainer>
          <S.Icon
            src={"/icons/sort.png"}
            onClick={() => {
              todo.sortTodo(todo.TodoArr);
            }}
          ></S.Icon>
        </S.SortContainer>
        {todo.TodoArr.map((item) => {
          return (
            <S.Item key={item.id}>
              <S.Icon
                src={!item.completed ? "/icons/done.png" : "/icons/undo.png"}
                onClick={() => todo.doneTodo(item.id)}
              ></S.Icon>
              <S.Icon
                src={"/icons/edit2.png"}
                onClick={() => {
                  toggleModal(item.title, item.id);
                }}
              ></S.Icon>
              <p>{item.title}</p>

              <S.Icon
                src={"/icons/delete.png"}
                onClick={() => todo.deleteTodo(item.id)}
              ></S.Icon>
              {/* <button onClick={() => todo.doneTodo(item.id)}>Done</button> */}
              {/* <button onClick={() => todo.deleteTodo(item.id)}>Delete</button> */}
              {/* <button
                onClick={() => {
                  toggleModal(item.title, item.id);
                }}
              > */}

              {/* </button> */}
            </S.Item>
          );
        })}
        <EditTodoModal
          id={todoId}
          title={"Редактировать"}
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
