import { Nav } from "./Nav";
import { Footer } from "./Footer";
import {
  MdLocationPin,
  MdBusinessCenter
} from "react-icons/md";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import profilePic from "../src/assets/Profile.jpeg";
import { projects } from "./data/projects";
import { blogs } from "./data/blogs";


function App() {
  return (
    <>
      <Nav />

      {/* Hero + Profile Section */}
      <section className="bg-background text-text py-20 px-4 md:px-6 border-b border-xmuted">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Profile Card */}
          <div>
            <img
              src={profilePic}
              alt="profile"
              className="w-60 h-60 object-cover rounded-full mb-6 mx-auto border border-yellow-500"
            />
            <div className="shadow-card rounded-xl p-6">
              <div className="text-center">
                <p className="text-white text-lg mt-1">Jacqueline Tuyisenge</p>
              </div>

              {/* Contact Info */}
              <div className="mt-4 space-y-2 text-sm text-muted">
                <p className="flex items-center gap-2">
                  <MdLocationPin className="text-interactive" /> Rwanda
                </p>
                <p className="flex items-center gap-2">
                  <MdBusinessCenter className="text-interactive" /> Full-time / Freelancer
                </p>
                <p className="flex items-center gap-2">
                  <a
                    href="https://www.linkedin.com/in/jacqueline-tuyisenge/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2 items-center hover:text-yellow-500"
                  >
                    Connect on <FaLinkedin className="text-interactive" />
                  </a>
                </p>
              </div>

              {/* Skills */}
              <ul className="flex flex-wrap gap-2 mt-4 justify-center text-xs font-medium text-muted">
                {["HTML", "CSS", "JavaScript", "Python", "React", "Node.js"].map((skill) => (
                  <li
                    key={skill}
                    className="px-3 py-1 rounded-full border border-yellow-500 cursor-pointer hover:bg-interactive hover:text-background transition"
                  >
                    {skill}
                  </li>
                ))}
              </ul>

              {/* CV Button */}
              <div className="mt-6 text-center">
                <button className="border border-interactive text-background px-6 py-2 rounded-xl font-medium bg-interactive hover:bg-foreground transition">
                  Download CV
                </button>
              </div>
            </div>
          </div>

          {/* Hero */}
          <div className="space-y-6">
            <div>
              <code className="text-muted text-sm">&lt;h1&gt;</code>
              <h1 className="text-2xl md:text-3xl font-bold mt-2 leading-tight">
                <span className="text-interactive animate-pulse">Hi</span>,<br />
              </h1>
                <p className="text-base text-muted max-w-xl mt-2">
                   I am a software engineer, and i specialize in full-stack development.
                </p>
              <code className="text-muted text-sm">&lt;/h1&gt;</code>
            </div>

            <div>
              <code className="text-muted text-sm">&lt;p&gt;</code>
              <p className="text-base text-muted max-w-xl mt-2">
                If you’re looking for a developer who gets things done...
              </p>
              <code className="text-muted text-sm">&lt;/p&gt;</code>
            </div>

            <p className="mt-6 text-lg font-medium text-yellow-600">Let’s Talk</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-background text-text py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title with Line */}
          <div className="flex items-center justify-center mb-8">
            <h2 className="text-lg text-center align-center font-bold text-muted">Projects</h2>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {projects.slice(0, 6).map((project) => (
              <a
                key={project.name}
                href={project.live || project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group overflow-hidden rounded-xl hover:shadow-lg transition duration-300"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center px-4 text-center">
                  <p className="text-white text-lg font-semibold">{project.name}</p>
                  <p className="text-white text-xs mt-1">{project.description}</p>
                </div>
              </a>
            ))}
          </div>

          {/* More Button */}
          <div className="mt-12 text-center">
            <a
              href="/projects"
              className="inline-block border border-interactive text-background px-6 py-2 rounded-xl font-medium bg-interactive hover:bg-foreground transition"
            >
              View More Projects →
            </a>
          </div>

        </div>
      </section>

      {/* Blogs Section */}
      <section className="bg-background text-text py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title with Line */}
          <div className="flex items-center justify-center mb-8">
            <h2 className="text-lg text-center align-center font-bold text-muted">Blogs</h2>
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {blogs.slice(0, 3).map((blog) => (
              <div key={blog.id} className="rounded-xl overflow-hidden bg-background shadow-card hover:shadow-lg transition duration-300">
                <Link to={`/blogs/${blog.id}`} key={blog.id} className="rounded-xl overflow-hidden bg-background transition duration-300">
                <img
                  src={typeof blog.coverImage === "string" ? blog.coverImage : ""}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 space-y-2">
                  <p className="text-sm text-muted">{new Date(blog.date).toDateString()}</p>
                  <h3 className="text-lg font-semibold">{blog.title}</h3>
                  <p className="text-sm text-muted">{blog.subtitle}</p>
                  <div className="flex gap-2 flex-wrap mt-2">
                    {blog.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-xs bg-interactive text-background px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                </Link>
              </div>
            ))}
          </div>

          {/* View All Blogs Button */}
          <div className="mt-12 text-center">
            <a
              href="/blogs"
              className="inline-block border border-interactive text-background px-6 py-2 rounded-xl font-medium bg-interactive hover:bg-foreground transition"
            >
              View More Blogs →
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
