import { AiOutlineCheckCircle, AiOutlineDelete } from 'react-icons/ai';

const Todo = ({ todo, handleSetComplete, handleDelete }) => {

    const { id, title, completed } = todo;

    return (
        <div
            className="flex items-center justify-between p-4 bg-zinc-100 bg-opacity-20 text-zinc-100 border-b border-solid border-primary border-opacity-20 "
        >
            <div className="flex items-center">
                {
                    completed ? (
                        <div onClick={() => handleSetComplete(id)} className="text-green-400 rounded-full cursor-pointer">
                            <AiOutlineCheckCircle />
                        </div>
                    )
                        : (

                            <span onClick={() => handleSetComplete(id)} className={`bg-zinc-200 hover:text-green-400 bg-opacity-20  rounded-full cursor-pointer`}>
                                <AiOutlineCheckCircle />
                            </span>
                        )
                }
                <p className={"px-4 " + (completed && "line-through ")}>{title}</p>
            </div>
            <AiOutlineDelete onClick={() => handleDelete(id)} className="cursor-pointer hover:text-red-500 transition-all duration-300 ease-in" alt="Close Icon" />
        </div>
    );
}

export { Todo } 