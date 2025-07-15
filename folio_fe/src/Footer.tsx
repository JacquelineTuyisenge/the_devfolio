import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-background text-text border-t border-xmuted py-5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">&copy; {new Date().getFullYear()} Jacqueline Tuyisenge. All rights reserved.</p>

        <div className="flex gap-6 text-muted text-xl">
          <a
            href="mailto:tuyisengejacqui2002@gmail.com"
            aria-label="Email"
            className="hover:text-yellow-500 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/jacqueline-tuyisenge/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-yellow-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/JacquelineTuyisenge"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-yellow-500 transition"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}
