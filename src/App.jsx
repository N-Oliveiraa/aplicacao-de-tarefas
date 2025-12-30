import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import { TaskProvider } from './context/TaskContext';




function App() {

  return (
    <>
      <TaskProvider>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-task" element={<AddTask />} />
        </Routes>
      </TaskProvider>
    </>
  )
}

export default App
