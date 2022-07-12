import React from "react";
import { BsCheck2 } from 'react-icons/bs';

const TodoItem = ({todo, changeTodo}) => {
    return (
        <button style={{borderStyle: "solid", borderColor: "rgb(48 53 62)", background: "rgb(48 53 62)", color: "white", borderRadius: "35px", minWidth: "300px", width: "40%", marginBottom: "6px", padding: "8px", display: "flex", alignItems: "center"}} onClick={() => changeTodo(todo.id)}>
            
            <div style={{border: "1px", borderStyle: "solid", borderColor: "#ec97d1", borderRadius: "25px", padding: "6px", marginRight: "20px" }}><BsCheck2 size={20} className="text-white-50"/></div>

            {todo.title}
        </button>
    )
}

export default TodoItem;