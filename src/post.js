import React from "react";
import TodoItem from './todoItem.js'
import { useState } from "react";

// const title = 'Hello world';

const data = [
    {
        id: '0001',
        title: '6:00 подъем на пробежку',
        isCompleted: false,
    },
    {
        id: '0002',
        title: '6:40 прогулка с Майком',
        isCompleted: false,
    },
    {
        id: '0003',
        title: '7:30 завтрак',
        isCompleted: false,
    },
    {
        id: '0004',
        title: '8:00 рабочий день',
        isCompleted: false,
    }
]

const Post = () => {
    const [todos, setTodos] = useState(data);

    const changeTodo = (id) => {
        const copy = [...todos];
        const current = copy.find(t => t.id === id);
        current.isCompleted = !current.isCompleted;
        setTodos(copy);
    }

    return <div style={{ height: "100vh", paddingTop: "20px", paddingLeft: "20px"}} className="text-white bg-dark"> 
        <h1 style={{marginBottom: "15px", marginLeft: "10px" }}>Список задач</h1>
        {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
        ))
        }
    
    </div>
};

export default Post;