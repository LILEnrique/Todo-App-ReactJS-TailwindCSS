import { useEffect, useState } from 'react';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Aprender NextJS',
      completed: false,
    },
    {
      id: 2,
      title: 'Leer documentación Framer Motion',
      completed: true,
    },
    {
      id: 3,
      title: 'Salir a andar en bicicleta',
      completed: false,
    },
    {
      id: 4,
      title: 'Ver una película',
      completed: false,
    },
    {
      id: 5,
      title: 'Cocinar',
      completed: true,
    }
  ])

  const [activeFilter, setActiveFilter] = useState('todas');

  const [filteredTodos, setFilteredTodos] = useState(todos);

  const addTodo = (title) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;

    const newTodo = {
      id: lastId + 1,
      title,
      completed: false
    }

    const todoList = [...todos]
    todoList.push(newTodo);

    setTodos(todoList);
  }

  const handleSetComplete = (id) => {

    const updatedList = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo;
    })

    setTodos(updatedList);
  }

  const handleClearComplete = () => {
    const updatedList = todos.filter(todo => !todo.completed);
    setTodos(updatedList);
  };

  const handleDelete = (id) => {
    const updatedList = todos.filter(todo => todo.id !== id);
    setTodos(updatedList);
  }

  const showAllTodos = () => {
    setActiveFilter('todas')
  }

  const showActiveTodos = () => {
    setActiveFilter('activas')
  }

  const showCompletedTodos = () => {
    setActiveFilter('completadas')
  }

  useEffect(() => {
    if (activeFilter === 'todas') {
      setFilteredTodos(todos);
    } else if (activeFilter === 'activas') {
      const activeTodos = todos.filter(todo => todo.completed === false);
      setFilteredTodos(activeTodos);
    } else if (activeFilter === 'completadas') {
      const completedTodos = todos.filter(todo => todo.completed === true);
      setFilteredTodos(completedTodos);
    }

  }, [activeFilter, todos]);

  return (
    <div className='bg min-h-screen font-inter h-full text-gray-100 flex items-center justify-center py-20 px-5'>
      <div className='container flex flex-col max-w-xl'>
        <h1 className="text-5xl font-black ">
          Agenda x CatPsycho 📑
        </h1>
        <TodoInput addTodo={addTodo} />
        <TodoList
          activeFilter={activeFilter}
          todos={filteredTodos}
          showAllTodos={showAllTodos}
          showActiveTodos={showActiveTodos}
          showCompletedTodos={showCompletedTodos}
          handleSetComplete={handleSetComplete}
          handleDelete={handleDelete}
          handleClearComplete={handleClearComplete} />
      </div>

    </div>
  );
}

export default App;