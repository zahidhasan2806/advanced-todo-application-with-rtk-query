import { useGetTodosQuery } from "../features/api/apiSlice";
import Todo from './Todo'

export default function TodoList() {
    const { data: todos, isLoading, isError, error } = useGetTodosQuery();
    // decide what to render
    let content = null;

    if (isLoading) {
        content = <div className="text-slate-600">Loading...</div>;
    };

    if (!isLoading && isError) {
        content = <div className="text-red-600">{error}</div>;
    };

    if (!isError && !isLoading && todos?.length === 0) {
        content = <div className="text-slate-600">No task found!</div>;
    };

    if (!isError && !isLoading && todos?.length > 0) {

        content = todos.map((todo) => <Todo key={todo.id} todo={todo} />)

    }
    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {content}
        </div>
    );

};




