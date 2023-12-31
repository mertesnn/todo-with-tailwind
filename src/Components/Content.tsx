import { FormEvent, useState } from 'react'
import deleteIcon from '../Images/delete-icon.svg'

const Content = ({
    todos,
    heading,
    setTodos,
}: {
    todos: todos[]
    heading: heading
    setTodos: React.Dispatch<React.SetStateAction<todos[]>>
}) => {
    const [mainInput, setMainInput] = useState<string>('')

    const addTodo = (event: FormEvent) => {
        event.preventDefault()

        const uniqueId = new Date().getTime()
        const newTodo: todos = {
            id: uniqueId,
            text: mainInput,
            completed: false,
            show: true,
        }
        setTodos([...todos, newTodo])
        setMainInput('')
    }

    const changeStatus = (id: Number) => {
        const todoIndex = todos.map((item) => item.id).indexOf(id)
        todos[todoIndex].completed = !todos[todoIndex].completed
        setTodos([...todos])
    }

    const deleteTodo = (id: Number) => {
        setTodos(todos.filter((item) => item.id !== id))
    }

    return (
        <div className="w-5/6 p-16 border-l">
            <h1 className="text-3xl text-black font-bold">{heading} Tasks</h1>
            <form onSubmit={addTodo} className="flex gap-8 items-center mt-6">
                <input
                    type="text"
                    className="w-full rounded-md main-input h-12 px-6 text-lg"
                    placeholder="Add a new task"
                    value={mainInput}
                    onChange={(e) => setMainInput(e.target.value)}
                />
                <input
                    type="submit"
                    className="bg-primary text-white rounded-md h-12 px-5 cursor-pointer"
                    value="Add Todo"
                />
            </form>

            <div className="overflow-auto h-5/6">
                {todos && todos.length > 0 ? (
                    todos.map(
                        (item, index) =>
                            item.show && (
                                <div
                                    className={`mt-10 flex items-center justify-between ${
                                        item.completed ? 'completed' : ''
                                    }`}
                                    key={index}
                                >
                                    <label className="flex items-center">
                                        <input
                                            type="checkbox"
                                            className="custom-checkbox"
                                            onClick={() =>
                                                changeStatus(item.id)
                                            }
                                            checked={item.completed}
                                        />
                                        <span className="checkmark"></span>
                                        <span className="ml-10 text-lg select-none">
                                            {item.text}
                                        </span>
                                    </label>
                                    <button
                                        className="border rounded-md px-3 h-8 border-primary"
                                        onClick={() => deleteTodo(item.id)}
                                    >
                                        <img
                                            src={deleteIcon}
                                            className="cursor-pointer"
                                            alt="Delete"
                                        />
                                    </button>
                                </div>
                            )
                    )
                ) : (
                    <div className="mt-10 flex items-center justify-between">
                        There is nothing here.
                    </div>
                )}
            </div>
        </div>
    )
}

export default Content
