import React from 'react';
import axios from 'axios';

const TaskItem = ({ task, onTaskCompleted }) => {
    const handleDone = async () => {
        try {
            const response = await axios.patch(`/task/${task.id}/complete`);
            onTaskCompleted(response.data); // Notify parent component with updated task
        } catch (error) {
            console.error('Error marking task as completed:', error);
        }
    };

    return (
        <div className={`task-item ${task.completed ? 'completed' : ''}`}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            {!task.completed && <button onClick={handleDone}>Done</button>}
        </div>
    );
};

export default TaskItem;
