import React from "react";

export const WorkingTodo = ({ tasks, handleTaskStatus }) => {
    return (
        <div className="container">
            <div className="heading">On Working TOdo</div>
            {tasks.filter(item => item.status === "working").map((item, index) => {
                return (<div>
                    <li key={index} >
                        {item.name} - Status: {item.status}
                        <button
                            onClick={() => handleTaskStatus(item.id, "completed")}
                        >
                            Mark as Completed
                        </button>
                    </li>
                </div>)
            })}
        </div>
    )
}