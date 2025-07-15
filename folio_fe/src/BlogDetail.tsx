import { useParams, Link } from "react-router-dom";
import { blogs } from "./data/blogs";
import type { Blog } from "./data/types";
import ReactMarkdown from "react-markdown";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const blog: Blog | undefined = blogs.find((b) => b.id === id);

  if (!blog) {
    return <div className="text-center text-red-500 mt-20">Blog not found.</div>;
  }

  return (
    <>
      <Nav />
    <div className="bg-background text-text py-20 px-5 md:px-10 min-h-screen">
      <Link to="/" className="border border-yellow-500 rounded-full px-4 hover:bg-yellow-700 mb-4 inline-block">
        ← Back
      </Link>

      <img
        src={blog.coverImage}
        alt={blog.title}
        className="w-full h-80 object-cover rounded-xl mb-6"
      />

      <p className="text-sm text-muted">{new Date(blog.date).toDateString()}</p>
      <h1 className="text-3xl md:text-4xl font-bold mb-2">{blog.title}</h1>
      <h2 className="text-lg text-muted mb-8">{blog.subtitle}</h2>

      <div className="flex gap-2 flex-wrap mb-12">
        {blog.tags.map((tag) => (
          <span key={tag} className="text-xs bg-interactive text-background px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      {blog.sections && blog.sections.length > 0 ? (
        blog.sections.map((section, index) => (
          <div key={index} className="mb-12">
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">{section.heading}</h3>
            <div className="prose prose-invert prose-pre:bg-gray-800 prose-pre:text-white prose-code:text-sm">
                <ReactMarkdown>
                    {section.content}
                </ReactMarkdown>
            </div>

          </div>
        ))
      ) : (
        <p className="text-muted">No content available for this blog.</p>
      )}
    </div>
    <Footer />
    </>
  );
}

export default BlogDetail;
