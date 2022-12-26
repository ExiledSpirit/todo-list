import { Header } from './components/Header';
import styles from './App.module.css';

import './global.css'
import { TodoList } from './components/TodoList';
import { CreateTask } from './components/CreateTask';
import { useState } from 'react';
import { Task } from './entities/task';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function addTask(taskDescription: string) {
    const task = new Task({description: taskDescription});

    setTasks((updatedTasks) => {
      return [...updatedTasks, task];
    })
  }

  function deleteTask(toDeleteTask: Task) {
    setTasks(updatedTasks => {
      return updatedTasks.filter((task) => task.id !== toDeleteTask.id);
    });
  }
  
  function checkTask(taskToCheck: Task) {
    setTasks(updatedTasks => {
      return updatedTasks.map(task => {
        if (task.id !== taskToCheck.id) return task;
        const newTask: Task = Object.assign(task);
        newTask.check();
        return newTask;
      });
    })
  }

  function uncheckTask(taskToUncheck: Task) {
    setTasks(updatedTasks => {
      return updatedTasks.map(task => {
        if (task.id !== taskToUncheck.id) return task;
        const newTask: Task = Object.assign(task);
        newTask.uncheck();
        return newTask;
      });
    })
  }

  return (
    <div className={styles.wrapper}>
      <Header />

      <div className={styles.appContainer}>
        <CreateTask addTask={addTask}/>
        <TodoList
          tasks={tasks}
          deleteTask={deleteTask}
          checkTask={checkTask}
          uncheckTask={uncheckTask}
        />
      </div>
    </div>
  );
}

export default App
