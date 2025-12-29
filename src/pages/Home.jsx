import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { Link } from 'react-router-dom';
import TaskItem from '../components/TaskItem';


const Home = () => {
    const { tasks } = useContext(TaskContext);


return (
    <main className="container">
        <header className="header">
            <h1>Lista de Tarefas</h1>
            <Link to="/add-task" className="link-add">
                {tasks.length === 0 ? "Adicionar Tarefa" : "Adicionar Nova Tarefa"}
            </Link>
        </header>


        {tasks.length === 0 && (
            <div className="empty-state">
                <p>Nenhuma tarefa cadastrada</p>
            </div>
        )}


        <section className="task-list">
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} />
            ))}
        </section>
    </main>
);
};


export default Home;