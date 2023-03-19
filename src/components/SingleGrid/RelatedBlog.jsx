import React from "react";
import { Link } from "react-router-dom";
import "../../styles/main.css";

const RelatedBlog = ({ blog }) => {
  const { id, title, image, tags, createdAt } = blog;

  const tagsList = tags
    ? tags?.map((tag, index) => {
        return <span key={index}>#{tag}</span>;
      })
    : null;

  return (
    <div className="card">
      <Link to={`/blogs/${id}`}>
        <img src={image} className="card-image" alt={title} />
      </Link>
      <div className="p-4">
        <Link
          to={`/blogs/${id}`}
          className="text-lg post-title lws-RelatedPostTitle"
        >
          {title}
        </Link>
        <div className="mb-0 tags">{tagsList}</div>
        <p>{createdAt}</p>
      </div>
    </div>
  );
};

export default RelatedBlog;
