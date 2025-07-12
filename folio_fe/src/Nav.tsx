import { FaGithub } from "react-icons/fa";

export function Nav() {
  return (
    <nav className="bg-background text-text border-b border-xmuted">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold">Jackie</h1>
        <ul className="flex items-center gap-6 text-sm text-muted cursor-pointer">
          <li className="hover:text-interactive transition">Home</li>
          <li className="hover:text-interactive transition">About</li>
          <li className="hover:text-interactive transition">Projects</li>
          <li className="hover:text-interactive transition">Blogs</li>
          <li className="text-lg hover:text-interactive transition">
            <FaGithub />
          </li>
        </ul>
      </div>
    </nav>
  );
}
