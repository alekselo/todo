import React, { useState } from 'react';

import Header from './components/Header/Header';
import './App.scss';
import Container from './components/Container/Container';
import TodoPanel from './components/TodoPanel/TodoPanel';
import { TodoList } from './components/TodoList/TodoList';


const DEFAULT_TODO_LIST = [
  { id: 1, name: 'task 1', description: 'description 1', checked: false },
  { id: 2, name: 'task 2', description: 'description 2', checked: false },
  {
    id: 3,
    name: 'task 3',
    description:
      'so long task description 3 so long task description so long task description so long task description so long task description',
    checked: true
  }
];

function App() {
  const [todoIdForEdit, setTodoIdForEdit] = useState<number | null>(null);
  const [todos, setTodos] = React.useState(DEFAULT_TODO_LIST);


  const selectTodoIdForEdit = (id: Todo['id']) => {
    setTodoIdForEdit(id);
  }

  const addTodo = ({ name, description }: Omit<Todo, 'checked' | 'id'>) => {
    setTodos([...todos, { id: todos[todos.length - 1].id + 1, description, name, checked: false }])

  }


  const checkTodo = (id: Todo['id']) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id: Todo['id']) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const changeTodo = ({ name, description }: Omit<Todo, 'checked' | 'id'>) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoIdForEdit) {
          return { ...todo, name, description };
        }
        return todo;
      })
    );
    setTodoIdForEdit(null)
  }

  return (
    <div className="App">

      <Container>
        <Header todoCount={todos.length}></Header>
        <TodoPanel mode='add' addTodo={addTodo} />
        <TodoList
          todos={todos}
          todoIdForEdit={todoIdForEdit}
          checkTodo={checkTodo}
          deleteTodo={deleteTodo} selectTodoIdForEdit={selectTodoIdForEdit}
          changeTodo={changeTodo}
        />
      </Container>

    </div>
  );
}

export default App;
