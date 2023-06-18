import React from "react"

export const CompletedTodo = ({ tasks }) => {
    return (

        // <div className="container" style={{height: 100}}>
        //     <div className="heading">Completed TOdo</div>
        //     <div className="workingcontainer">
        //         {tasks.filter(item => item.status === "completed").map((item, index) => {
        //             return (<div>
        //                 <li key={index} >
        //                     {item.name}
        //                 </li>
        //             </div>)
        //         })}
        //     </div>
        // </div>
<div className="container">
            <div className="heading">Completed TOdo</div>
            {tasks.filter(item => item.status === "completed").map((item, index) => {
                    return (<div>
                        <li key={index} >
                            {item.name}
                        </li>
                    </div>)
                })}
        </div>
        
    )
}
