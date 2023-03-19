import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../features/blogs/blogsSlice";
import "../../styles/main.css";
import Blog from "./Blog";

const Blogs = () => {
  const dispatch = useDispatch();
  const { blogs, isLoading, isError, error } = useSelector(
    (state) => state.blogs
  );
  const { filter, sort } = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const filterByStatus = (blog) => {
    switch (filter) {
      case "Saved":
        return blog.isSaved;

      default:
        return true;
    }
  };

  const filterByDropdown = (blogs) => {
    switch (sort) {
      case "newest":
        return [...blogs].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

      case "most_liked":
        return [...blogs].sort((a, b) => parseInt(b.likes) - parseInt(a.likes));

      default:
        return blogs;
    }
  };

  // decide what to render
  let content;

  if (isLoading) content = <div className="col-span-12">Loading...</div>;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isError && !isLoading && blogs?.length === 0) {
    content = <div className="col-span-12">No blogs found!</div>;
  }

  if (!isError && !isLoading && blogs?.length > 0) {
    content = filterByDropdown(blogs)
      .filter(filterByStatus)
      .map((blog) => <Blog key={blog.id} blog={blog} />);
  }

  return (
    <main className="post-container" id="lws-postContainer">
      {content}
    </main>
  );
};

export default Blogs;
