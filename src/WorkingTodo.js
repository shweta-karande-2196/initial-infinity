import React, { useEffect, useState } from "react"

export const WorkingTodo=({tasks,handleTaskStatus})=>{

    const [workingTodo, setWorkingTodo] = useState([])
    console.log(tasks)

    useEffect(()=>{
        setWorkingTodo(tasks)
    },[tasks]
    )
    return (
        <div className="workingcontainer">
            {workingTodo.map(item=>{
                                    console.log(item)

                return(
                    <div>{item}</div>
                )

            })}
        </div>
    )
}