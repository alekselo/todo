import TodoPanel from "../TodoPanel/TodoPanel";
import TodoItem from "./TodoItem/TodoItem"


interface TodoListProps {
  todoIdForEdit: Todo['id'] | null;
  todos: Todo[];
  changeTodo: ({ name, description }: Omit<Todo, 'checked' | 'id'>) => void;
  checkTodo: (id: Todo['id']) => void;
  deleteTodo: (id: Todo['id']) => void;
  selectTodoIdForEdit: (id: Todo['id']) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, checkTodo, deleteTodo, todoIdForEdit, selectTodoIdForEdit, changeTodo }) => (

  <div>
    {todos.map((todo) => {

      if (todo.id === todoIdForEdit) return <TodoPanel
        key={todo.id}
        mode='edit'
        changeTodo={changeTodo}
        editTodo={{ name: todo.name, description: todo.description }}
      />

      return (
        <TodoItem
          key={todo.id}
          todo={todo}
          checkTodo={checkTodo}
          deleteTodo={deleteTodo} selectTodoIdForEdit={selectTodoIdForEdit}
        />
      )
    })}
  </div>

);