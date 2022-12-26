import { Task } from "../entities/task";
import styles from './TodoItem.module.css';
import { Trash } from 'phosphor-react';
import { ChangeEvent, useState } from "react";
import { Checkbox } from "./Checkbox";

interface TodoItemProps {
  task: Task;
  deleteTask: (task: Task) => void;
  uncheckTask: (task: Task) => void;
  checkTask: (task: Task) => void;
}

export function TodoItem({
  task,
  deleteTask,
  checkTask,
  uncheckTask
}: TodoItemProps) {
  const checked = task.doneAt !== null && task.doneAt !== undefined;

  function handleCheckTask() {
    if (checked === true) {
      uncheckTask(task);
      return;
    }
    checkTask(task);
  }

  function handleDeleteTask() {
    deleteTask(task);
  }

  return (
    <div className={styles.container}>
      <div className={styles.descriptionContainer}>
        <Checkbox
          checked={checked}
          onClick={handleCheckTask}
        />
        <p className={!checked ? styles.taskDescription : styles.doneTaskDescription}>{task.description}</p>
      </div>
      <button className={styles.trashCan} title='Deletar tarefa'>
        <Trash onClick={handleDeleteTask} size={16} />
      </button>
    </div>
  );
}
