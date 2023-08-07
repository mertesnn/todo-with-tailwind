import { useState } from 'react'
import Content from './Components/Content'
import Sidebar from './Components/Sidebar'

function App() {
    const [todos, setTodos] = useState<todos[]>([])
    const [heading, setHeading] = useState<heading>('All')

    return (
        <div className="container py-16 mx-auto px-20 h-full">
            <div className="bg-white rounded-md flex shadow-lg main h-full">
                <Sidebar
                    todos={todos}
                    setTodos={setTodos}
                    setHeading={setHeading}
                />
                <Content todos={todos} heading={heading} setTodos={setTodos} />
            </div>
        </div>
    )
}

export default App
