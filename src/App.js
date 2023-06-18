// import logo from './logo.svg';
import './App.css';

import React from 'react';
import { Header } from './Header';
import TodoList from './TodoList.js'
const App = () => {
  return (
    <div >  
      <Header/>
      <TodoList />
    </div>
  );
};

export default App;
