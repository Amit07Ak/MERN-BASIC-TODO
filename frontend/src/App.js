import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, input]);
    setInput("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>📝 MERN Todo App</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a todo"
      />

      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            {todo}
            <button onClick={() => deleteTodo(i)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
