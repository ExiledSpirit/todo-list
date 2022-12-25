import styles from './CreateTask.module.css';
import { PlusCircle } from 'phosphor-react';

export function CreateTask() {
  return (
    <form className={styles.form}>
      <input
        placeholder='Adicione uma nova tarefa'
        autoComplete='false'
        spellCheck='false'
      />
      <button><span>Criar</span><PlusCircle size={16} /></button>
    </form>
  );
}
