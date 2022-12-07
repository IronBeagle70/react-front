import React from 'react';
// import reactLogo from './assets/react.svg'
import './App.css'

import { Counter } from "./components/Counter";
import { Search } from "./components/Search";
import { AllList } from "./components/AllList";
import { OneItem } from "./components/OneItem";
import { CreateButton } from "./components/CreateButton";
import { DesktopCreate } from './components/DesktopCreate';
import { useState } from 'react';

const defaultTodos=[
  {text:'First Item', completed:true},
  {text:'Second Item', completed:false},
  {text:'Third Item', completed:false}
];

function App() {

  const [todos, setTodos] = useState(defaultTodos);

  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos=[];

  if(!searchValue.length>=1){
    searchedTodos=todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  const completeTodo = (text) =>{
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed=true;
    setTodos(newTodos);
  }

  const deleteTodo = (text) =>{
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
  }

  return (
    <div className='general'>
      <DesktopCreate />
      <div className='general__second'>
        <Counter total={totalTodos} completed={completedTodos} />
        <Search  searchValue={searchValue} setSearchValue={setSearchValue}  />
        <AllList>
          {
            searchedTodos.map(todo =>(
              <OneItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={()=>completeTodo(todo.text)} onDelete={()=>deleteTodo(todo.text)} />
            ))
          }
        </AllList>
        <CreateButton />
      </div>
    </div>
  )
};

export default App;
