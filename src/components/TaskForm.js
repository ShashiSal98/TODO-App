import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ onTaskAdded }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newTask = { title, description };
        try {
            // Assuming '/task' is the API route to save the task on the server
            const response = await axios.post('/task', newTask);
            onTaskAdded(response.data); // Notify parent component about the new task
            setTitle('');  // Clear the input fields
            setDescription('');
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <div className="input-container">
                <input
                    name="title"
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div className="input-container">
                <input
                    name="description"
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <div className="button-container">
                <button type="submit">ADD</button>
            </div>
        </form>
    );
};

export default TaskForm;
