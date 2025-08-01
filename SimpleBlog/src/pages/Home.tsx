import BlogForm from "../components/BlogForm"
import BlogList from "../components/BlogList"
import type { Post } from "../App"
import "../styles/Home.css"

type HomeProps = {
  posts: Post[]
  onAddPost: (title: string, content: string) => void
}

export default function Home({ posts, onAddPost }: HomeProps) {
  return (
    <div className="home-wrapper">
      <BlogForm onAddPost={onAddPost} />
      <BlogList posts={posts} />
    </div>
  )
}
