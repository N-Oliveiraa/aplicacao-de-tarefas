import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { useNavigate } from 'react-router-dom';


const AddTask = () => {
const [title, setTitle] = useState('');
const { addTask } = useContext(TaskContext);
const navigate = useNavigate();


const handleSubmit = (e) => {
    e.preventDefault();

  // 🔹 VALIDAÇÃO (AQUI)
  if (!title.trim()) {
    return;
  }

    addTask({
    id: Date.now(),
    title
});


    navigate('/');
};


return (
    <main className="container">
        <h1>Adicionar Tarefa</h1>

        <form className="form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Digite a tarefa"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <button className="btn save" type="submit">Salvar</button>
        </form>
    </main>
);
};


export default AddTask;