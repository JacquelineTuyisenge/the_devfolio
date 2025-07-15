import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Nav() {
  return (
    <nav className="bg-background text-text border-b border-xmuted fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold">Jackie</h1>
        <ul className="flex items-center gap-6 text-sm text-muted cursor-pointer">
          <li className="hover:text-interactive transition">
            <Link to="/" className="inline-block hover-text-white rounded-xl font-medium transition">
              Home
            </Link>
          </li>
          <li className="hover:text-interactive transition">
            <a
                href="/projects"
                className="inline-block hover-text-white rounded-xl font-medium transition"
            >
                Projects
            </a>
          </li>
          <li className="hover:text-interactive transition">
            <a
                href="/blogs"
                className="inline-block hover-text-white rounded-xl font-medium transition"
            >
                Blogs
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
