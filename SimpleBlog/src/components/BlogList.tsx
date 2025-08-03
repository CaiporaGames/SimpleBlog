import { Link } from "react-router-dom"
import "../styles/BlogList.css"

type Post = {
  id: string
  title: string
  content: string
}

type BlogListProps = {
  posts?: Post[]
}

export default function BlogList({ posts = [] }: BlogListProps) {
  return (
    <div className="blog-list">
      {posts.map(post => (
        <div key={post.id} className="blog-card">
          <h2 className="blog-title">{post.title}</h2>
          <p className="blog-snippet">{post.content.slice(0, 100)}...</p>
          <Link to={`/post/${post.id}`} className="read-more">Read More →</Link>
        </div>
      ))}
    </div>
  )
}
