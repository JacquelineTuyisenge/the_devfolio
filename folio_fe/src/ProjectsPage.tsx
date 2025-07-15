import { Link } from "react-router-dom";
import { projects } from "./data/projects";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

function ProjectsPage() {
  return (
    <>
      <Nav />
    <section className="bg-background text-text py-20 px-4 md:px-6 min-h-screen">
        <Link to="/" className="border border-yellow-500 rounded-full px-4 hover:bg-yellow-700 hover:text-background mb-4 inline-block">← </Link>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-12">All Projects</h1>
        <p className="text-muted text-center p-4">Here is a list of my work, feel free to check them out! </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project) => (
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
      </div>
    </section>
    <Footer />
    </>
  );
}

export default ProjectsPage;
