import Content from './Components/Content'
import Sidebar from './Components/Sidebar'

function App() {
    return (
        <div className="container py-16 mx-auto px-20 h-full">
            <div className="bg-white rounded-md flex shadow-lg main h-full">
                <Sidebar />
                <Content />
            </div>
        </div>
    )
}

export default App
