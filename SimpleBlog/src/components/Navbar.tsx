import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-gray-800 px-6 py-4 shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-white hover:text-gray-300">
          Simple Blog
        </Link>
      </div>
    </nav>
  )
}
