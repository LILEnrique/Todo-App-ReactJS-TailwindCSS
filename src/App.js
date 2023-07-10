import { useEffect, useState } from "react";
import { TodoList } from "./components/TodoList";
import { db } from "./firebase";
import { query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc } from "firebase/firestore";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [activeFilter, setActiveFilter] = useState("todas");
  const [filteredTodos, setFilteredTodos] = useState(todos);

  // Crear tarea
  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === "") {
      alert("Please enter a valid todo");
      return;
    }
    await addDoc(collection(db, "todos"), {
      text: input,
      completed: false,
    });
    setInput("");
  };
  // Leer tarea desde firebase
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  // Actualizar tarea en firebase
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  // Eliminar tarea
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  //Borrar completadas
  const handleClearComplete = async () => {
    const completedTodos = todos.filter((todo) => todo.completed);
    await Promise.all(completedTodos.map((todo) => deleteTodo(todo.id)));
  };

  const showAllTodos = () => {
    setActiveFilter("todas");
  };

  const showActiveTodos = () => {
    setActiveFilter("activas");
  };

  const showCompletedTodos = () => {
    setActiveFilter("completadas");
  };

  useEffect(() => {
    if (activeFilter === "todas") {
      setFilteredTodos(todos);
    } else if (activeFilter === "activas") {
      const activeTodos = todos.filter((todo) => todo.completed === false);
      setFilteredTodos(activeTodos);
    } else if (activeFilter === "completadas") {
      const completedTodos = todos.filter((todo) => todo.completed === true);
      setFilteredTodos(completedTodos);
    }
  }, [activeFilter, todos]);

  return (
    <div className="bg min-h-screen font-inter h-full text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <h1 className="text-5xl font-black ">Organiza tu día a día 📑</h1>
        <form onSubmit={createTodo} className="mt-6 relative">
          <input
            className="focus:shadow-lg font-Inter focus:shadow-primary pl-12 w-full py-4 bg-zinc-100 bg-opacity-20 rounded-xl outline-none transition-all duration-300 ease-in-out"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Agregar tarea"
          />
        </form>
        <TodoList
          activeFilter={activeFilter}
          todos={filteredTodos}
          showAllTodos={showAllTodos}
          showActiveTodos={showActiveTodos}
          showCompletedTodos={showCompletedTodos}
          handleSetComplete={toggleComplete}
          handleDelete={deleteTodo}
          handleClearComplete={handleClearComplete}
        />
      </div>
    </div>
  );
}

export default App;
