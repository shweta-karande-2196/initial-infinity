import React, { useState } from "react";
import { WorkingTodo } from "./WorkingTodo";
import { CompletedTodo } from "./CompletedTodo";
// import "./TodoList.css";

// import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { name: newTask, status: "pending" }]);
      setNewTask("");
    }
  };

  const handleTaskStatus = (index, status) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status = status;
    setTasks(updatedTasks);
  };

  return (
    <div className="todocontainer">
    <div className="container">
      <div>
        <h2>Todo List</h2>
        <div className="todo">
          <input
            type="text"
            value={newTask}
            onChange={handleInputChange}
            placeholder="Enter a new task"
          />
          <button onClick={handleAddTask}>Add</button>
        </div>
        <div className="todolist">
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {task.name} - Status: {task.status}
                {task.status !== "completed" && (
                  <>
                    <button onClick={() => handleTaskStatus(index, "working")}>
                      Mark as Working
                    </button>
                    <button
                      onClick={() => handleTaskStatus(index, "completed")}
                    >
                      Mark as Completed
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
      <WorkingTodo tasks={tasks} handleTaskStatus={handleTaskStatus}/>
      <CompletedTodo tasks={tasks}/>
      </div>
  );
};

export default TodoList;
