import React from "react";

const blogsTop = [
  {
    id: 1,
    title: "Designers are meant to be loved, not to be understood.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    author: "John Doe",
    date: "19 Oct 2022",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    id: 2,
    title: "Designers are meant to be loved, not to be understood.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    author: "John Doe",
    date: "19 Oct 2022",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    id: 3,
    title: "Designers are meant to be loved, not to be understood.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    author: "John Doe",
    date: "19 Oct 2022",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
];

const blogsBottom = [
  {
    id: 4,
    title: "Designers are meant to be loved, not to be understood.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    author: "John Doe",
    date: "19 Oct 2022",
  },
  {
    id: 5,
    title: "Designers are meant to be loved, not to be understood.",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    author: "John Doe",
    date: "19 Oct 2022",
  },
  {
    id: 6,
    title: "Designers are meant to be loved, not to be understood.",
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
    author: "John Doe",
    date: "19 Oct 2022",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm tracking-widest uppercase text-[#01686d] font-semibold">
            Our Recent Blogs
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Publish what you think,
            <br className="hidden sm:block" />
            don&apos;t put it on social media
          </h2>
        </div>

        {/* Top Blogs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {blogsTop.map((blog) => (
            <div
              key={blog.id}
              className="group rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition"
            >
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-56 w-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-[#01686d] transition">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{blog.excerpt}</p>
                <p className="text-xs text-gray-400">
                  BY {blog.author.toUpperCase()} | {blog.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Latest Blogs Header */}
        <div className="text-center mb-12">
          <p className="text-sm tracking-widest uppercase text-[#01686d] font-semibold">
            Publish what you think
          </p>
          <h3 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900">
            Latest Blogs
          </h3>
          <div className="mt-4 flex justify-center">
            <span className="h-1 w-16 rounded-full bg-[#f27b22]"></span>
          </div>
        </div>

        {/* Bottom Blogs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsBottom.map((blog) => (
            <div
              key={blog.id}
              className="group rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition"
            >
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-52 w-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-5">
                <p className="text-xs text-gray-400 mb-2">
                  {blog.date} | BY {blog.author.toUpperCase()}
                </p>
                <h4 className="text-base font-semibold text-gray-900 group-hover:text-[#00444b] transition">
                  {blog.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
