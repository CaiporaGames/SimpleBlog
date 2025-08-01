type BlogPostProps = {
  title: string
  content: string
}

export default function BlogPost({ title, content }: BlogPostProps) {
  return (
    <div className="bg-gray-800 p-6 rounded shadow-md">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-gray-200 whitespace-pre-wrap">{content}</p>
    </div>
  )
}
