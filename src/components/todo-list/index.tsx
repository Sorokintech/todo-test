import * as S from "./style";
import { DeleteButton } from "../UI/delete-button";
import { DoneButton } from "../UI/done-button";

export const TodoList = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Item>
          Встать
          <DoneButton />
          <DeleteButton />
        </S.Item>
        <S.Item>Сесть</S.Item>
        <S.Item>Лечь</S.Item>
        <S.Item>Прыгнуть</S.Item>
      </S.Container>
    </S.Wrapper>
  );
};
