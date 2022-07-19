import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

const STORED_TODOS_KEY = "all-todos-key-data";

function App() {
  const [todos, setTodos] = useState([]);


  useEffect(() => {
    const storeTodos = JSON.parse(localStorage.getItem(STORED_TODOS_KEY));

    if (storeTodos) {
      setTodos(storeTodos);
    }
  }, []);

  useEffect(()=>{
    localStorage.setItem(STORED_TODOS_KEY, JSON.stringify(todos))
  },[todos])

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className=" ">
      <div className="mx-3  md:mx-14 md:mt-20 mt-10 h-auto ">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-blue-500">TodoZ</h2>
        </div>
        <AddTodo addTodo={addTodo} />
        <Todos
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />



      </div>
    </div>
  );
}

export default App;
