import BlogForm from "../components/BlogForm"
import BlogList from "../components/BlogList"
import type { Post } from "../App"

type HomeProps = {
  posts: Post[]
  onAddPost: (title: string, content: string) => void
}

export default function Home({ posts, onAddPost }: HomeProps) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <BlogForm onAddPost={onAddPost} />
      <BlogList posts={posts} />
    </div>
  )
}
