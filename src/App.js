import './App.css';
import List from './components/list'
import AddTodo from './components/AddTodo'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  let [todos, setTodos] = useState()

  const getTodos = async () => {
    const todos = (await axios.get('http://localhost:3001/todos')).data
    return todos
  }

  const sendTodo = async (todo) => {
    const result = (await axios.post(`http://localhost:3001/todos?todo=${todo}`)).data
    if (result) return result
    return false
  }

  const deleteTodo = async (todoIndex) => {
    const result = (await axios.delete(`http://localhost:3001/todos?index=${todoIndex}`)).data
    if (result) return result
    return false
  }

  useEffect(() => {
    axios.get('http://localhost:3001/login').then(() => {
      getTodos().then(res => {
        setTodos(res)
      })
    })
  }, [])

  const addElement = async (element) => {
    sendTodo(element).then(data => {
      setTodos(data)
    })
  }

  const deleteElement = (index) => {
    deleteTodo(index).then(data => {
      setTodos(data)
    })
  }

  return (
    <div className="App">
      <AddTodo 
        onAddClick={(e) => addElement(e)}
      />
      <List 
        onDeleteElement={(e) => deleteElement(e)}
        elements={todos}
      />
    </div>
  );
}

export default App;
