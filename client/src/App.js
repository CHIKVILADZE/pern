import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Pagination from './components/Pagination';

function App() {
  const [todos, setTodos] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage, setTodosPerPage] = useState(4);

  const lastTodoIndex = currentPage * todosPerPage;
  const firstTodoIndex = lastTodoIndex - todosPerPage;

  const currentTodo = todos.slice(firstTodoIndex, lastTodoIndex);

  return (
    <div className="App">
      <div className="container">
        <TodoForm todos={todos} setTodos={setTodos} />
        <TodoList todos={currentTodo} setTodos={setTodos} />
        <Pagination
          totalTodos={todos.length}
          todosPerPage={todosPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default App;
