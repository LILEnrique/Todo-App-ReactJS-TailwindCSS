import { useState } from "react"

const TodoInput = ({ addTodo }) => {

    const [title, setTitle] = useState('');

    const handleAddTodo = (e) => {
        if (e.key.toLowerCase() === 'enter') {
            addTodo(title);
            setTitle('');
        }
    }

    return (
        <div className="mt-6 relative">
            <input
                className="focus:shadow-lg font-Inter focus:shadow-primary pl-12 w-full py-4 bg-zinc-100 bg-opacity-20 rounded-xl outline-none transition-all duration-300 ease-in-out"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={(e) => handleAddTodo(e)}
                placeholder="Agregar tarea"
            />
        </div>
    )
}

export { TodoInput }