import React from "react";

export const Header= ()=>{
    return(
        <div >
            <header className="nav">
                    <div style={{color:'white', fontStyle:'bold',fontSize:40}}>Trello</div>
                    <select>
                        <option>Workspaces</option>
                    </select>
                    <select>
                        <option>Recent</option>
                    </select>
                    <select>
                         <option>Starred</option>
                    </select>
                    <input type="button" value="Create"/>
                    <input type="search" value="Search"/>
                    <img src="https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_640.png" alt="user" style={{borderRadius:50,width:50}}/>
            </header>

        </div>
            


    )
}