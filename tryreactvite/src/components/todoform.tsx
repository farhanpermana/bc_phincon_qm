// import React, { useState } from 'react';
// import { useAppDispatch } from '../store';
// import { createNewTodo } from '../features/todos/todo.thunks';

// const TodoForm: React.FC = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const dispatch = useAppDispatch();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (title.trim()) {
//       dispatch(createNewTodo(title, description));
//       setTitle('');
//       setDescription('');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="mb-6">
//       <div className="mb-4">
//         <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
//           Title
//         </label>
//         <input
//           type="text"
//           id="title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
//           Description (Optional)
//         </label>
//         <textarea
//           id="description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           rows={3}
//         />
//       </div>
//       <button
//         type="submit"
//         className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//       >
//         Add Todo
//       </button>
//     </form>
//   );
// };

// export default TodoForm;