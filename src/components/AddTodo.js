import React, { useState } from "react";

const AddTodo = ({ onAddClick }) => {
  let [value, setValue] = useState('')

  const onInputChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <input 
        value={value} 
        onChange={(e) => onInputChange(e)} 
        type="text" 
      />
      <button onClick={() => onAddClick(value)} >Add Todo</button>
    </div>
  )
}

export default AddTodo;