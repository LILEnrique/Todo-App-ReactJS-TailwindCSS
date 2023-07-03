import { FilterButton, FilterButtonContainer, FiltersContainer, ItemsLeft } from "./Filter"
import { TbListCheck } from "react-icons/tb";

export const TodoFilters = ({ total, activeFilter, showAllTodos, showActiveTodos, showCompletedTodos, handleClearComplete }) => {
    return (
        <FiltersContainer>
            <ItemsLeft total={total} />
            <FilterButtonContainer>
                <FilterButton action={() => showAllTodos()} active={activeFilter} filter='Todas' />
                <FilterButton action={() => showActiveTodos()} active={activeFilter} filter='Activas' />
                <FilterButton action={() => showCompletedTodos()} active={activeFilter} filter='Completadas' />
            </FilterButtonContainer>

            <button onClick={() => handleClearComplete()} className="flex items-center text-zinc-100 text-xs hover:text-primary cursor-pointer transition-all duration-300 ease-in-out">
                Borrar completadas <TbListCheck className="ml-1 text-sm" />
            </button>
        </FiltersContainer>
    )
}

