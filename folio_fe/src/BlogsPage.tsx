import { Link } from "react-router-dom";
import { blogs } from "./data/blogs";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

function BlogsPage() {
  return (
    <>
      <Nav />
    <section className="bg-background text-text py-20 px-4 md:px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-12">All Blogs</h1>
        <p className="text-muted text-center p-4">Here is a list of my content, feel free to check them out! </p>
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
      </div>
    </section>
    <Footer />
    </>
  );
}

export default BlogsPage;
