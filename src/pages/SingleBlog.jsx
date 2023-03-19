import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailedBlog from "../components/SingleGrid/DetailedBlog";
import RelatedBlogs from "../components/SingleGrid/RelatedBlogs";
import { fetchBlog } from "../features/blog/blogSlice";
import "../styles/main.css";

const SingleBlog = () => {
  const { blog, isLoading, isError, error } = useSelector(
    (state) => state.blog
  );
  const { id, tags } = blog;
  const dispatch = useDispatch();
  const { blogId } = useParams();

  useEffect(() => {
    dispatch(fetchBlog(blogId));
  }, [dispatch, blogId]);

  // decide what to render
  let content = null;
  if (isLoading) content = <div className="col-span-12">Loading...</div>;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && !blog?.id) {
    content = <div className="col-span-12">No blog found!</div>;
  }

  if (!isLoading && !isError && blog?.id) {
    content = (
      <div className="post-page-container">
        <DetailedBlog blog={blog} />
        <RelatedBlogs currentVideoId={id} tags={tags} />
      </div>
    );
  }

  return content;
};

export default SingleBlog;
