import * as S from "./style";
import React, { ChangeEvent } from "react";
import todo from "../../store/todo";

interface ModalProps {
  id: number;
  title: string;
  isOpen: boolean;
  onClose: () => void;
  content: string;
}

export const EditTodoModal: React.FC<ModalProps> = ({
  id,
  title,
  isOpen,
  onClose,
  content,
}) => {
  const [todoContent, setTodoContent] = React.useState(content);
  // Hook to set modal to be able to close on click outside. Clicking outside will NOT save any changes in todo content
  const overlayRef = React.useRef(null);
  const handleOverlayClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };
  //Savings changes of the todo content, if any
  const saveTodoChanges = () => {
    setTodoContent(todoContent);
    onClose();
    todo.updateTodo(id, todoContent);
  };
  //Updating content that has been passed to modal from todo
  React.useEffect(() => {
    setTodoContent(content);
  }, [content]);
  return isOpen ? (
    <S.Container>
      <S.Wrapper ref={overlayRef} onClick={handleOverlayClick}>
        <S.ModalBlock key={id}>
          <S.ModalBlockTop>
            <S.Icon
              src="/icons/save.png"
              alt="close-modal-button"
              onClick={saveTodoChanges}
            ></S.Icon>
            <S.ModalTitle>{title}</S.ModalTitle>
          </S.ModalBlockTop>
          <S.ModalContentLabel>
            <S.ModalContentInput
              type="text"
              defaultValue={content}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setTodoContent(event.target.value);
              }}
            />
          </S.ModalContentLabel>
        </S.ModalBlock>
      </S.Wrapper>
    </S.Container>
  ) : null;
};
