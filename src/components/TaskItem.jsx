import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskItem = ({ task }) => {
  const { removeTask, editTask } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleEdit = () => {
    editTask({ ...task, title: newTitle });
    setIsEditing(false);
  };

  return (
    <article className="task">
      {isEditing ? (
        <>
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />

          <div className="actions">
            <button className="btn save" onClick={handleEdit}>
              Salvar
            </button>
          </div>
        </>
      ) : (
        <>
          <span>{task.title}</span>

          <div className="actions">
            <button
              className="btn edit"
              onClick={() => setIsEditing(true)}
            >
              Editar
            </button>

            <button
              className="btn delete"
              onClick={() => {
                const confirmDelete = window.confirm(
                  "🗑️ Ei! Essa tarefa vai embora pra sempre...\n\nTem certeza que deseja excluir essa tarefa?"
                );

                if (confirmDelete) {
                  removeTask(task.id);
                }
              }
              } 
              >
              Excluir
            </button>
          </div>
        </>
      )}
    </article>
  );
};

export default TaskItem;
