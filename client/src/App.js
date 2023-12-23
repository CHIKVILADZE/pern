import { useState } from 'react';
import './App.css';
import TodoEditModal from './components/todoEditModal';
import TodoForm from './components/todoForm';
import TodoList from './components/todoList';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <div className="container">
        <TodoForm todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
