import React, { useState } from "react";
import styles from "./style.module.scss";
import Button from "../Button/Button";

const DEFAULT_TODO = {
  name: '',
  description: '',
}

interface AddTodoPanelProps {
  mode: 'add';
  addTodo: ({ name, description }: Omit<Todo, 'checked' | 'id'>) => void;
}

interface EditTodoPanelProps {
  mode: 'edit';
  editTodo: Omit<Todo, 'id' | 'checked'>;
  changeTodo: ({ name, description }: Omit<Todo, 'checked' | 'id'>) => void;
}

type TodoPanelProps = AddTodoPanelProps | EditTodoPanelProps;

const TodoPanel: React.FC<TodoPanelProps> = (props) => {
  const isEdit = props.mode === 'edit';
  const [todo, setTodo] = useState(isEdit ? props.editTodo : DEFAULT_TODO);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  }

  const onClick = () => {
    const todoItem = { name: todo.name, description: todo.description };
    if (isEdit) {
      return props.changeTodo(todoItem);
    }
    props.addTodo(todoItem);
    setTodo(DEFAULT_TODO);
  }

  return (
    <div className={styles.todoPanelContainer}>
      <div className={styles.fieldsContainer}>
        <div className={styles.fieldContainer}>
          <label htmlFor="name">
            <div>Name</div>
            <input type="text" id='name' value={todo.name} name='name' onChange={onChange} />
          </label>
        </div>
        <div className={styles.fieldContainer}>
          <label htmlFor="name">
            <div>Description</div>
            <input type="text" id='description' value={todo.description} name='description' onChange={onChange} />
          </label>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        {!isEdit && (<Button color="blue" onClick={onClick}>ADD</Button>)}

        {isEdit && (<Button color="orange" onClick={onClick}>EDIT</Button>)}

      </div>
    </div>

  );
}

export default TodoPanel;