import { Todo } from "../utils/interface";

interface TodoProps {
  todo: Todo,
  onEdit: (todo: Todo) => void;
  onDelete: (id: string) => void;
}

export default function TodoItem({ todo, onEdit, onDelete }: TodoProps){
  return(
    <tr className="border-b text-sm text-gray-700">
      <td className="p-2">
        {todo.Title}
      </td>
      <td className="p-2 text-center">
        <input 
        type="checkbox"
        checked={todo.Completed}
        onChange={()=> onEdit({...todo, Completed: !todo.Completed})} 
        className="h-4 w-4"
        />
      </td>
      <td className="p-2 space-x-2 text-center">
        <button 
        onClick={()=> onEdit(todo)}
        className="text-blue-500 hover:underline">
          Edit
        </button>
        <button 
        onClick={()=> onDelete(todo.objectId)}
        className="text-red-500 hover:underline">
          Delete
        </button>
      </td>
      </tr>
  )
}