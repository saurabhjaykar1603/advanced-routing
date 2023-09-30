import React from "react";
import blogData from "./../../configs/blog-data.json";
import PreviewPostCard from "../../components/PreviewPostCard/PreviewPostCard";

function Post() {
  return (
    <>
      <h1>Posts</h1>
      {blogData.map((post, i) => {
        return (
          <PreviewPostCard
            key={i}
            id={post.id}
            Title={post.Title}
            Description={post.Description}
            author={post.author}
          />
        );
      })}
    </>
  );
}

export default Post;
