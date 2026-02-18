import React from "react";

const BlogCard = ({ image, date, title, excerpt, href = "#" }) => {
  return (
    <article className="group">
      {/* Image */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover object-top "
        />
        {/* Date badge */}
        <span className="absolute bottom-5 right-0 translate-y-1/2 bg-[#f5bd63] text-black text-base font-medium px-4 py-2 border-t-4 border-l-4 border-white">
          {date}
        </span>
      </div>

      {/* Content */}
      <div className="pt-6">
        <h3 className="text-3xl font-semibold text-gray-900 leading-snug">
          {title}
        </h3>
        <p className="mt-3 text-gray-600 font-medium ">{excerpt}</p>

        <a
          href={href}
          className="mt-4 inline-flex items-center border-b-2 border-[#3f1700] gap-2 font-medium text-[#3f1700]"
        >
          Read More
        </a>
      </div>
    </article>
  );
};

export default BlogCard;
