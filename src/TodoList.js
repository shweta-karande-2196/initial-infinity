import React, { useState } from "react";
import { WorkingTodo } from "./WorkingTodo";
import { CompletedTodo } from "./CompletedTodo";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [id, setId] = useState(0);
  
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { name: newTask, status: "pending", id: id }]);
      setId(id + 1);
      setNewTask("");
    }
  };

  const handleTaskStatus = (index, status) => {
    console.log(index, status)
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
              onChange={(e) => { handleInputChange(e) }}
              placeholder="Enter a new task"
            />
            <button style={{borderRadius: 0}} onClick={() => { handleAddTask() }}>Add</button>
          </div>
          <div className="todolist">
            <ul>
              {tasks.filter(item=>item.status==="pending").map((task, index) => (
                <li key={index}>
                  {task.name}
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
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <WorkingTodo tasks={tasks} handleTaskStatus={handleTaskStatus} />
      <CompletedTodo tasks={tasks} />
    </div>
  );
};

export default TodoList;
