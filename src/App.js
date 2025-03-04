import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
    const [tasks, setTasks] = useState([]);

    // Function to add new task to state
    const handleTaskAdded = (newTask) => {
        setTasks((prevTasks) => [newTask, ...prevTasks]); // Add the new task at the top of the list
    };

    return (
        <div className="App">
            <div className="container">
                <div className="left-panel">
                    <h1>Add a Task</h1>
                    <TaskForm onTaskAdded={handleTaskAdded} />
                </div>
                <div className="right-panel">
                    <h2>Task List</h2>
                    <TaskList tasks={tasks} /> {/* Pass tasks to TaskList */}
                </div>
            </div>
        </div>
    );
};

export default App;
