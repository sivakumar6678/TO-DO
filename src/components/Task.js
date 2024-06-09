import React from 'react';

const Task = ({ task, onTaskComplete, onTaskRemove }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onTaskComplete(task.id)}
      />
      <span>{task.text}</span>
      <button onClick={() => onTaskRemove(task.id)}>Remove</button>
    </div>
  );
};

export default Task;
