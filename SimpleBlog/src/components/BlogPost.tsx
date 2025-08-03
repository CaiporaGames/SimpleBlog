import "../styles/BlogPost.css"

type BlogPostProps = {
  title: string
  content: string
}

export default function BlogPost({ title, content }: BlogPostProps) {
  return (
    <div className="post-container">
      <h1 className="post-title">{title}</h1>
      <p className="post-content">{content}</p>
    </div>
  )
}
