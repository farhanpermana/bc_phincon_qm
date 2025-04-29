import TodoList from "../components/todolist";

const HomePage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <TodoList />
    </div>
  );
};

export default HomePage;
