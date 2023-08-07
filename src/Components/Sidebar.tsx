const Sidebar = ({
    todos,
    setTodos,
    setHeading,
}: {
    todos: todos[]
    setTodos: React.Dispatch<React.SetStateAction<todos[]>>
    setHeading: React.Dispatch<React.SetStateAction<heading>>
}) => {
    const showAll = () => {
        todos.forEach((item) => {
            item.show = true
        })
        setTodos([...todos])
        setHeading('All')
    }

    const showWaitingTodos = () => {
        showAll()
        todos.forEach((item) => {
            if (item.completed) {
                item.show = false
            }
        })
        setTodos([...todos])
        setHeading('Waiting')
    }

    const showCompletedTodos = () => {
        showAll()
        todos.forEach((item) => {
            if (!item.completed) {
                item.show = false
            }
        })
        setTodos([...todos])
        setHeading('Completed')
    }

    return (
        <div className="w-1/6 flex flex-col gap-5 mt-14 p-16 pl-10 pr-0">
            <div className="flex items-center gap-3">
                <button className="text-2xl color-primary" onClick={showAll}>
                    All
                </button>
                {todos.length > 0 && (
                    <span className="bg-primary flex justify-center items-center rounded w-6 h-6 text-xs text-white">
                        {todos.length}
                    </span>
                )}
            </div>
            <div className="flex items-center gap-3">
                <button className="text-2xl" onClick={showWaitingTodos}>
                    Waiting
                </button>
                {todos.filter((item) => !item.completed).length > 0 && (
                    <span className="bg-primary flex justify-center items-center rounded w-6 h-6 text-xs text-white">
                        {todos.filter((item) => !item.completed).length}
                    </span>
                )}
            </div>
            <div className="flex items-center gap-3">
                <button className="text-2xl" onClick={showCompletedTodos}>
                    Completed
                </button>
                {todos.filter((item) => item.completed).length > 0 && (
                    <span className="bg-primary flex justify-center items-center rounded w-6 h-6 text-xs text-white">
                        {todos.filter((item) => item.completed).length}
                    </span>
                )}
            </div>
        </div>
    )
}

export default Sidebar
