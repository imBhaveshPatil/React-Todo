import React, { useState } from 'react'

function TodoInp(props) {
    const [inputText, setInputText] = useState('');
  return (
    <div className='input-container'>
        <input type='text' className='input-box-todo' value={inputText}
        onChange={e=>{
            setInputText(e.target.value);
        }}></input>
        <button  className='add-btn' 
        onClick={()=> {
            props.addList(inputText) 
            setInputText('')}}>+</button>
      
    </div>
  )
}

export default TodoInp
