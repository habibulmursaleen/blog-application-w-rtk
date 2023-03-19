import React from "react";
import { useDispatch } from "react-redux";
import { isLiked, isSavedBlog } from "../../features/blog/blogSlice";
import "../../styles/main.css";

const DetailedBlog = ({ blog }) => {
  const dispatch = useDispatch();
  const { id, title, image, likes, tags, isSaved, description } = blog;
  const tagsList = tags
    ? tags?.map((tag, index) => {
        return <span key={index}>#{tag}</span>;
      })
    : null;

  const handleLikes = () => {
    dispatch(isLiked({ id, likes }));
  };

  const handleSave = () => {
    dispatch(isSavedBlog({ id, isSaved }));
  };

  return (
    <main className="post">
      <img
        src={image}
        alt="githum"
        className="w-full rounded-md"
        id="lws-megaThumb"
      />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
          {title}
        </h1>
        <div className="tags" id="lws-singleTags">
          {tagsList}
        </div>
        <div className="btn-group">
          {/* <!-- handle like on button click --> */}
          <button className="like-btn" id="lws-singleLinks">
            <i className="fa-regular fa-thumbs-up" onClick={handleLikes}></i>{" "}
            {likes}
          </button>
          {/* <!-- handle save on button click --> */}
          {/* <!-- use ".active" class and "Saved" text  if a post is saved, other wise "Save" --> */}
          <button
            className={isSaved ? "active save-btn" : " save-btn"}
            id="lws-singleSavedBtn"
            onClick={handleSave}
          >
            <i className="fa-regular fa-bookmark"></i>{" "}
            {isSaved ? "Saved" : "Save"}
          </button>
        </div>
        <div className="mt-6">
          <p>{description}</p>
        </div>
      </div>
    </main>
  );
};

export default DetailedBlog;
