import { AiOutlineUnorderedList } from "react-icons/ai";

const FiltersContainer = ({ children }) => {
  return <div className="flex items-center justify-between p-4 bg-zinc-100 bg-opacity-20 ">{children}</div>;
};

const ItemsLeft = ({ total }) => {
  return (
    <p className="flex items-center text-zinc-100 text-xs">
      <AiOutlineUnorderedList className="mr-1 text-sm" /> {total} tareas
    </p>
  );
};

const FilterButtonContainer = ({ children }) => {
  return <div className="flex items-center space-x-2">{children}</div>;
};

const FilterButton = ({ action, active, filter }) => {
  return (
    <button
      onClick={action}
      className={
        ` hover:text-primary cursor-pointer transition-all duration-300 ease-in-out text-xs ` +
        (active.toLowerCase().includes(filter.toLowerCase()) ? "text-green-400 " : "text-zinc-100")
      }
    >
      {filter}
    </button>
  );
};

export { ItemsLeft, FiltersContainer, FilterButtonContainer, FilterButton };
