import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blogData from "./../../configs/blog-data.json";

function ReadPost() {
  const { id } = useParams();

  const [post, setPost] = useState({});

  useEffect(() => {
    blogData.forEach((postObj) => {
      console.log(blogData)
      if (postObj.id == id) {
        setPost(postObj);
      }
    });
  }, [id]);

  return (
    <>
      <div className="container d-flex justify-content-center mt-5">
        <div className="card shadow-lg border-2 w-100 p-5 " style={{ width: "28rem", backgroundColor: "#FFEFCA", color: "#000" }}>
          <div className="card-body">
            <h1>{post.Title}</h1>
            <p>By {post.author}</p>
            <p>{post.Description}</p>
            <p>{post.content}</p>
            <p>Price ${post.price}</p>
            <img  className="shadow rounded" src={post.live_image_url} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ReadPost;
