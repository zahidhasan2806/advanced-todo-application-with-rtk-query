import React from 'react';
import CompletedTodos from './components/CompletedTodos';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="h-screen mt-8 pt-6 bg-blue-100 ">

      <div className="mt-6 grid place-items-center  px-6 font-sans">
        <Navbar />

        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          <Header />

          <hr className="mt-4" />

          <TodoList />

          <hr className="mt-4" />

          <Footer />
        </div>
      </div>
      <div className="grid place-items-center py-8  px-6 font-sans">
        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          <h2 className="text-xl">Completed Todo List</h2>
          <CompletedTodos />
        </div>
      </div>
    </div>
  );
}

export default App;
