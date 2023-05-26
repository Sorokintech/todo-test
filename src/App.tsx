import { Header } from "./components/todo-list-header";
import { AddTodoItem } from "./components/add-todo-item";
import { TodoList } from "./components/todo-list";
import * as S from "./style";

function App() {
  return (
    <S.Container>
      <S.Wrapper>
        <Header />
        <AddTodoItem />
        <TodoList />
      </S.Wrapper>
    </S.Container>
  );
}

export default App;
