import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import PostPage from "./pages/PostPage"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
    </div>
  )
}

export default App
