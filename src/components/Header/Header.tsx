
import styles from './style.module.scss'


interface HeaderProps {
  todoCount: number;
}


const Header: React.FC<HeaderProps> = ({ todoCount }) => {
  return (
    <div className={styles.header}>
      <div className={styles.headerTitle}>
        Todo list <b>{todoCount}</b> task(s)
      </div>
    </div>
  )
}

export default Header