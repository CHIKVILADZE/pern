import { createContext, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Pagination from './components/Pagination';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light');
  const [todos, setTodos] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage, setTodosPerPage] = useState(4);

  const lastTodoIndex = currentPage * todosPerPage;
  const firstTodoIndex = lastTodoIndex - todosPerPage;

  const currentTodo = todos.slice(firstTodoIndex, lastTodoIndex);

  const toogleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      <div className="App" id={theme}>
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
    </ThemeContext.Provider>
  );
}

export default App;
