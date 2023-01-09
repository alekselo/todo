import styles from './style.module.scss';
import Button from '../../Button/Button';

interface TodoItemProps {
  todo: Todo;
  checkTodo: (id: Todo['id']) => void;
  deleteTodo: (id: Todo['id']) => void;
  selectTodoIdForEdit: (id: Todo['id']) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  checkTodo,
  deleteTodo,
  selectTodoIdForEdit,
}) => (
  <div className={styles.todoItemContainer} style={{ opacity: todo.checked ? 0.8 : 1 }}>
    <div>
      <div
        aria-hidden
        style={{
          opacity: todo.checked ? 0.5 : 1,
          textDecoration: todo.checked ? 'line-through' : 'none'
        }}
        onClick={() => checkTodo(todo.id)}
        className={styles.todoItemTitle}
      >
        {todo.name}
      </div>
      <div aria-hidden onClick={() => checkTodo(todo.id)} className={styles.todoItemDescription}>
        {todo.description}
      </div>
    </div>
    <div className={styles.todoItemButtonContainer}>
      <Button color='orange' onClick={() => selectTodoIdForEdit(todo.id)}>
        EDIT
      </Button>
      <Button color='red' onClick={() => deleteTodo(todo.id)}>
        DELETE
      </Button>
    </div>
  </div >
);


export default TodoItem;


