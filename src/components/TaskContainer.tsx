import styles from './TaskContainer.module.css';
import clipboard from '../assets/clipboard.svg';

export function TaskContainer() {
  return(
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.created}>Tarefas criadas <span className={styles.counter}>0</span></span>
        <span className={styles.done}>Concluídas <span className={styles.counter}>0 de 0</span></span>
      </header>
      
      <div className={styles.empty}>
        <img src={clipboard} alt="clipboard" />
        <span className={styles.tips}>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </span>
      </div>
    </div>
  );
}
