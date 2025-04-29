import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header';
import AddTodo from './components/addtodoform';
import TodoList from './components/todolist';

import ProductList from '../src/components/products/productlist';
import ProductDetail from './pages/product.detail';
import ProductForm from './pages/product.form';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route
              path="/"
              element={
                <div className="max-w-2xl mx-auto">
                  <AddTodo />
                  <TodoList />
                </div>
              }
            />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/create" element={<ProductForm />} />
            <Route path="/products/edit/:id" element={<ProductForm />} />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Routes>
        </main>
        <footer className="py-4 text-center text-gray-500 text-sm">
          <p>Todo & Product App &copy; {new Date().getFullYear()}</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
