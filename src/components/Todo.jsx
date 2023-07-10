import { AiOutlineCheckCircle, AiOutlineDelete } from "react-icons/ai";

const Todo = ({ todo, handleSetComplete, handleDelete }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-zinc-100 bg-opacity-20 text-zinc-100 border-b border-solid border-primary border-opacity-20 ">
      <div className="flex items-center">
        {todo.completed ? (
          <div onClick={() => handleSetComplete(todo)} className="text-green-400 rounded-full cursor-pointer">
            <AiOutlineCheckCircle />
          </div>
        ) : (
          <span
            onClick={() => handleSetComplete(todo)}
            className={`bg-zinc-200 hover:text-green-400 bg-opacity-20  rounded-full cursor-pointer`}
          >
            <AiOutlineCheckCircle />
          </span>
        )}
        <p className={"px-4 " + (todo.completed && "line-through ")}>{todo.text}</p>
      </div>
      <AiOutlineDelete
        onClick={() => handleDelete(todo.id)}
        className="cursor-pointer hover:text-red-500 transition-all duration-300 ease-in"
        alt="Close Icon"
      />
    </div>
  );
};

export { Todo };
