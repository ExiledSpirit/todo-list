import styles from './CreateTask.module.css';
import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';

interface CreateTaskProps {
  addTask: (task: string) => void;
}

export function CreateTask({addTask}: CreateTaskProps) {
  const [newTask, setNewTask] = useState('');

  console.log(newTask);
  
  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    
    addTask(newTask);

    setNewTask('');
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleCreateNewTask}
    >
      <input
        placeholder='Adicione uma nova tarefa'
        autoComplete='false'
        spellCheck='false'
        value={newTask}
        onChange={handleNewTaskChange}
      />
      <button><span>Criar</span><PlusCircle size={20} /></button>
    </form>
  );
}
