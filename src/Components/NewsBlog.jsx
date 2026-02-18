import React from "react";
import BlogCard from "./BlogCard";

const posts = [
  {
    image:
      "https://images.unsplash.com/photo-1637009981157-34818733b936?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "22 March 2024",
    title: "10 Fashion Trends for the Modern Woman",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    image:
      "https://images.unsplash.com/photo-1746730921374-ab56549262f3?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "21 March 2024",
    title: "Fashion Forward: Tips, Trends, and Inspiration",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1661490213320-052c87a353d6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "20 March 2024",
    title: "Fall Fashion Frenzy: The Ultimate Style Guide",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
];

const NewsBlog = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Eyebrow + Title */}
        <p className="text-center text-gray-800 text-xl font-medium">News & Blog</p>
        <h2 className="mt-2 text-center md:text-4xl text-5xl font-medium text-black/90">
          Our Latest News & Blogs
        </h2>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((p, i) => (
            <BlogCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsBlog;
