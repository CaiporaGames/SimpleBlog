import { useState } from "react"
import type { FormEvent } from "react"
import "../styles/BlogForm.css"

type BlogFormProps = {
  onAddPost: (title: string, content: string) => void
}

export default function BlogForm({ onAddPost }: BlogFormProps) {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!title || !content) return
    onAddPost(title, content)
    setTitle("")
    setContent("")
  }

  return (
    <form className="blog-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        className="blog-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        className="blog-textarea"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit" className="blog-button">Add Post</button>
    </form>
  )
}
