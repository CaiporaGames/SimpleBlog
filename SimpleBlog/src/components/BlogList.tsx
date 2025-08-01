type Post = {
  id: string
  title: string
  content: string
}

type BlogListProps = {
  posts?: Post[] // make optional
}

export default function BlogList({ posts = [] }: BlogListProps) {
  return (
    <div className="space-y-4">
      {posts.map(post => (
        <div key={post.id} className="bg-gray-800 p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
          <p className="text-sm text-gray-300">{post.content.slice(0, 100)}...</p>
        </div>
      ))}
    </div>
  )
}
