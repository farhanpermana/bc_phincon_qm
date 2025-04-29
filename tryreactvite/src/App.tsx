import React from 'react';
import Header from './components/header';
import AddTodo from './components/addtodoform';
import TodoList from './components/todolist';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <AddTodo />
          <TodoList />
        </div>
      </main>
      <footer className="py-4 text-center text-gray-500 text-sm">
        <p>Todo App &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default App;