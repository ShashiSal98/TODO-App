import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskItem from './TaskItem';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await axios.get('/task');
            setTasks(response.data); // Fetch all tasks (including completed ones)
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const handleTaskCompleted = async (id) => {
        try {
            const response = await axios.patch(`/task/${id}/complete`);
            setTasks(tasks.map(task => (task.id === id ? response.data : task))); // Update the task in the list
        } catch (error) {
            console.error('Error marking task as completed:', error);
        }
    };

    return (
        <div className="task-list">
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onTaskCompleted={handleTaskCompleted}
                />
            ))}
        </div>
    );
};

export default TaskList;