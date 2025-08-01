import { useParams } from "react-router-dom"
import BlogPost from "../components/BlogPost"
import { useEffect, useState } from "react"

type Post = {
  id: string
  title: string
  content: string
}

type PostPageProps = {
  allPosts: Post[]
}

export default function PostPage({ allPosts }: PostPageProps) {
  const { id } = useParams<{ id: string }>()
  const [post, setPost] = useState<Post | undefined>()

  useEffect(() => {
    const found = allPosts.find(p => p.id === id)
    setPost(found)
  }, [id, allPosts])

  if (!post) {
    return <div className="text-center text-white mt-10">Post not found</div>
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <BlogPost title={post.title} content={post.content} />
    </div>
  )
}
