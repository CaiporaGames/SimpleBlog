import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import PostPage from "./pages/PostPage"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import "./App.css"

export type Post = {
  id: string
  title: string
  content: string
}

export default function App() 
{
  const [posts, setPosts] = useState<Post[]>([])

  function handleAddPost(title: string, content: string) {
    const newPost: Post = { id: uuidv4(), title, content }
    setPosts(prev => [newPost, ...prev])
  }

  return (
    <div className="app-wrapper">
      <Routes>
        <Route path="/" element={<Home posts={posts} onAddPost={handleAddPost} />} />
        <Route path="/post/:id" element={<PostPage allPosts={posts} />} />
      </Routes>
    </div>
  )
}
