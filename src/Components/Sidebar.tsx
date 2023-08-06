const Sidebar = () => {
    return (
        <div className="w-1/6 flex flex-col gap-5 mt-14 p-16 pl-10 pr-0">
            <div className="flex items-center gap-3">
                <button className="text-2xl color-primary">All</button>
                <span className="bg-primary flex justify-center items-center rounded w-6 h-6 text-xs text-white">
                    5
                </span>
            </div>
            <div className="flex items-center gap-3">
                <button className="text-2xl">Waiting</button>
                <span className="bg-primary flex justify-center items-center rounded w-6 h-6 text-xs text-white">
                    3
                </span>
            </div>
            <div className="flex items-center gap-3">
                <button className="text-2xl">Completed</button>
                <span className="bg-primary flex justify-center items-center rounded w-6 h-6 text-xs text-white">
                    2
                </span>
            </div>
        </div>
    )
}

export default Sidebar
