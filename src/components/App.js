import React, { useState } from 'react';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const completeTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (taskId) => {
    // Add the fade-out class to the task element
    document.getElementById(`task-${taskId}`).classList.add('fade-out');

    // Remove the task after the animation duration
    setTimeout(() => {
      setTasks(tasks.filter((task) => task.id !== taskId));
    }, 500); // The duration should match the CSS animation duration
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <TaskList tasks={tasks} onTaskComplete={completeTask} onTaskRemove={removeTask} />
    </div>
  );
}

export default App;
