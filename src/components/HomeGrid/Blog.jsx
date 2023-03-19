import React from "react";
import { Link } from "react-router-dom";
import "../../styles/main.css";

const Blog = ({ blog }) => {
  const { id, title, image, likes, tags, isSaved, createdAt } = blog;

  const tagsList = tags
    ? tags?.map((tag, index) => {
        return <span key={index}>#{tag}</span>;
      })
    : null;

  return (
    <div className="lws-card">
      <Link to={`blogs/${id}`}>
        <img src={image} className="lws-card-image" alt={title} />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <p className="lws-likeCount">
            <i className="fa-regular fa-thumbs-up"></i>
            {likes}
          </p>
        </div>
        <Link to={`blogs/${id}`} className="lws-postTitle">
          {title}
        </Link>
        <div className="lws-tags">{tagsList}</div>
        {/* <!-- Show this element if post is saved --> */}
        <div className="flex gap-2 mt-4">
          <span className={isSaved ? "lws-badge" : null}>
            {" "}
            {isSaved ? "Saved" : null}{" "}
          </span>
        </div>
        {/* <!-- Show this element if post is saved Ends --> */}
      </div>
    </div>
  );
};

export default Blog;
