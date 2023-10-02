import React from "react";
import blogData from "./../../configs/blog-data.json";
import PreviewPostCard from "./../../components/PreviewPostCard/PreviewPostCard";
import "./Post.css";

function Post() {
  return (
    <>
      <h1 className="my-4 text-center fs-1 sticky-top z-2">Posts</h1>
      <div className=" post-container">
        {blogData.map((post, index) => {
          return (
            <>
              <PreviewPostCard
                key={index}
                id={post.id}
                Title={post.Title}
                Description={post.Description}
                author={post.author}
                
              />
            </>
          );
        })}
      </div>
    </>
  );
}

export default Post;
