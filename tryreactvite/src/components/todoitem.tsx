import React from 'react';
import { useDispatch } from 'react-redux';
import { updateTodoStatus, deleteTodo } from '../features/todos/todos.slice';
import { Todo } from '../types/todos.type';
import { AppDispatch } from '../store';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch<AppDispatch>();
  
  const handleStatusChange = () => {
    dispatch(updateTodoStatus({ id: todo.id, completed: !todo.completed }));
  };
  
  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };
  
  return (
    <div className={`bg-white p-4 rounded-lg shadow-sm mb-3 border-l-4 ${todo.completed ? 'border-green-500' : 'border-blue-500'}`}>
      <div className="flex items-start justify-between">
        <div className="flex items-start flex-1">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleStatusChange}
            className="mt-1 h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
          />
          
          <div className="ml-3 flex-1">
            <h3 className={`text-lg font-medium ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
              {todo.title}
            </h3>
            
            {todo.description && (
              <p className={`mt-1 text-sm ${todo.completed ? 'text-gray-400' : 'text-gray-600'}`}>
                {todo.description}
              </p>
            )}
            
            <p className="text-xs text-gray-400 mt-2">
              Created: {new Date(todo.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
        
        <button
          onClick={handleDelete}
          className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
          aria-label="Delete todo"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TodoItem;