import { Header } from './components/Header';
import styles from './app.module.css';

import './global.css'
import { TaskContainer } from './components/TaskContainer';
import { CreateTask } from './components/CreateTask';

function App() {
  return (
    <div>
      <Header />

      <div className={styles.appContainer}>
        <CreateTask />
        <TaskContainer />
      </div>
    </div>
  );
}

export default App
