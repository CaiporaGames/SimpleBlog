import { useState } from "react"
import type { FormEvent } from "react"

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
    <form onSubmit={handleSubmit} className="space-y-4 mb-6">
      <input
        type="text"
        placeholder="Title"
        className="w-full p-2 rounded bg-gray-700 text-white"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        className="w-full p-2 rounded bg-gray-700 text-white h-32"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
        Add Post
      </button>
    </form>
  )
}
