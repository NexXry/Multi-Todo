import {TodoItem} from "./TodoItem.jsx";
import {useState} from "react";

export const Todolist = () => {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState();
    const addTodo = ()=>{
        setTodos([...todos,{
            id: Math.floor(Math.random() * 10000),
            task: task,
            user: 'LALALA',
            done: false
        }])
    }

    const handleTask = (id)=>{
        let updateTodos = todos.map((todo)=> todo.id === id ? {...todo,done: !todo.done} : todo)
        setTodos(updateTodos)
    }

    const handleDel= (id)=>{
        setTodos([...todos.filter((todo)=> todo.id !== id)])
    }

    return (
        <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
            <div className="flex flex-row justify-between items-center">
                <div>
                    <h1 className="text-3xl font-medium">Multi list</h1>
                </div>
            </div>
            <div className="relative">
                <input type="search" id="default-search"
                       className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                       placeholder="add your todo" onChange={(e)=> {
                    setTask(e.target.value)
                }} required/>
                <button onClick={()=>{
                    addTodo()
                }}
                        className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search
                </button>
            </div>
            <div id="tasks" className="my-5">
                {todos.map((todo)=>{
                    return <TodoItem key={todo.id} handleTask={handleTask} handleDel={handleDel} todo={todo}></TodoItem>
                })}
            </div>
            <p className="text-xs text-slate-500 text-center">Last updated 12 minutes ago</p>
        </div>
    )
}
