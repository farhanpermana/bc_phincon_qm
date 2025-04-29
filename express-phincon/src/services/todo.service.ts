// import { Todo, CreateTodoDto, UpdateTodoDto } from "../interfaces/todo.interface";

// // Initialize with some sample todos
// let todos: Todo[] = [
//   {
//     id: "1",
//     title: "Learn TypeScript",
//     description: "Complete TypeScript tutorial",
//     completed: false,
//     createdAt: new Date("2023-01-15T09:00:00Z")
//   },
//   {
//     id: "2",
//     title: "Build Express API",
//     description: "Create a Todo API with Express and TypeScript",
//     completed: true,
//     createdAt: new Date("2023-01-20T14:30:00Z")
//   },
//   {
//     id: "3",
//     title: "Integrate with React",
//     description: "Connect the API to React frontend with Redux",
//     completed: false,
//     createdAt: new Date("2023-01-25T11:15:00Z")
//   },
//   {
//     id: "4",
//     title: "Deploy application",
//     description: "Deploy both frontend and backend to hosting service",
//     completed: false,
//     createdAt: new Date("2023-02-01T16:45:00Z")
//   }
// ];

// let currentId = 5; // Next ID to use for new todos

// export const findAll = async (): Promise<Todo[]> => {
//   return todos;
// };

// export const findOne = async (id: string): Promise<Todo | undefined> => {
//   return todos.find(todo => todo.id === id);
// };

// export const create = async (createTodoDto: CreateTodoDto): Promise<Todo> => {
//   const newTodo: Todo = {
//     id: (currentId++).toString(),
//     title: createTodoDto.title,
//     description: createTodoDto.description || '',
//     completed: false,
//     createdAt: new Date()
//   };
  
//   todos.push(newTodo);
//   return newTodo;
// };

// export const update = async (id: string, updateTodoDto: UpdateTodoDto): Promise<Todo | undefined> => {
//   const todoIndex = todos.findIndex(todo => todo.id === id);
  
//   if (todoIndex === -1) return undefined;
  
//   const updatedTodo = {
//     ...todos[todoIndex],
//     ...updateTodoDto,
//     id // Ensure ID doesn't change
//   };
  
//   todos[todoIndex] = updatedTodo;
//   return updatedTodo;
// };

// export const remove = async (id: string): Promise<boolean> => {
//   const initialLength = todos.length;
//   todos = todos.filter(todo => todo.id !== id);
//   return todos.length !== initialLength;
// };