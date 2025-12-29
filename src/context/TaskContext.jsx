import React, { createContext, useState, useEffect } from 'react';


export const TaskContext = createContext();


export const TaskProvider = ({ children }) => {
const [tasks, setTasks] = useState([]);


useEffect(() => {
const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
setTasks(storedTasks);
}, []);


useEffect(() => {
localStorage.setItem('tasks', JSON.stringify(tasks));
}, [tasks]);


const addTask = (task) => {
  setTasks(prevTasks => [...prevTasks, task]);
};


const removeTask = (id) => {
  setTasks(prev => prev.filter(task => task.id !== id));
};

const editTask = (updatedTask) => {
  setTasks(prev =>
    prev.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    )
  );
};


return (
<TaskContext.Provider value={{ tasks, addTask, removeTask, editTask }}>
{children}
</TaskContext.Provider>
);
};