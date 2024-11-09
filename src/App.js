import React, { useState } from "react";
import "./App.css";
import TodoInp from "./Components/TodoInp";
import TodoList from "./Components/TodoList";

function App() {
  const[listTodo, setListTodo] = useState([]);
  let addList = (inputText) =>{
    if(inputText !== '')
      setListTodo([...listTodo, inputText]);
  }

  const deleteListItem = (key) =>{
    let newLi = [...listTodo];
    newLi.splice(key, 1);
    setListTodo([...newLi]);
  }
  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInp addList={addList}/>
        <hr/>
        {listTodo.map((listItem, i) =>{
          return(
              <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
          )
        })}
        
      </div>
    </div>
  );
}

export default App;
