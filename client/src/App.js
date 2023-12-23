import './App.css';
import TodoEditModal from './components/todoEditModal';
import TodoForm from './components/todoForm';
import TodoList from './components/todoList';

function App() {
  return (
    <div className="App">
      <div className="container">
        <TodoForm />
        {/* <TodoEditModal /> */}
      </div>
    </div>
  );
}

export default App;
