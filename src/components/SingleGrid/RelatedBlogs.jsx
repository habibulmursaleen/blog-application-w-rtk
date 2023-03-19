import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedBlogs } from "../../features/relatedBlogs/relatedBlogsSlice";
import "../../styles/main.css";
import RelatedBlog from "./RelatedBlog";

const RelatedBlogs = ({ currentVideoId, tags }) => {
  const dispatch = useDispatch();
  const { relatedBlogs, isLoading, isError, error } = useSelector(
    (state) => state.relatedBlogs
  );

  useEffect(() => {
    dispatch(fetchRelatedBlogs({ tags, id: currentVideoId }));
  }, [dispatch, tags, currentVideoId]);

  // decide what to render
  let content = null;

  if (isLoading) content = <div className="col-span-12">Loading...</div>;
  if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  }
  if (!isLoading && !isError && relatedBlogs?.length === 0) {
    content = <div className="col-span-12">No related videos found!</div>;
  }
  if (!isLoading && !isError && relatedBlogs?.length > 0) {
    content = relatedBlogs.map((blog) => (
      <RelatedBlog key={blog.id} blog={blog} />
    ));
  }
  return (
    <div>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Blogs
      </h4>
      <div className="space-y-4 related-post-container">{content}</div>
    </div>
  );
};

export default RelatedBlogs;
