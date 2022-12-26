import styles from './TodoList.module.css';
import clipboard from '../assets/clipboard.svg';
import { Task } from '../entities/task';
import { TodoItem } from './TodoItem';

interface TodoListProps {
  tasks: Task[];
  deleteTask: (task: Task) => void,
  checkTask: (task: Task) => void,
  uncheckTask: (task: Task) => void
}

export function TodoList({tasks, deleteTask, checkTask, uncheckTask}: TodoListProps) {
  const tasksConcluidas = tasks.filter((task) => task.doneAt !== null && task.doneAt !== undefined);

  return(
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.created}>
          Tarefas criadas
          <span className={styles.counter}>{tasks.length}</span>
        </span>
        <span className={styles.done}>
          Concluídas
          <span className={styles.counter}>{tasksConcluidas.length} de {tasks.length}</span>
        </span>
      </header>
      
      {
        tasks.length === 0
        ?
        (
          <div className={styles.empty}>
            <img src={clipboard} alt="clipboard" />
            <span className={styles.tips}>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </span>
          </div>
        )
        :
        (
          tasks.map(task => {
            return (
              <TodoItem
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                checkTask={checkTask}
                uncheckTask={uncheckTask}
              />
            )
          })
        )
      }
    </div>
  );
}
