import React from "react";
import "./PreviewPostCard.css";
import { Link } from "react-router-dom";

function PreviewPostCard({ id, Title, author, Description }) {
  return (
    <>
      <div
        className="card m-2 shadow pre-post-card shadow "
        style={{ width: "28rem", backgroundColor: "#FFEFCA", color: "#000" }}
      >
        <div className="card-body">
          <h3 className="fw-bold">{Title}</h3>
          <p className="mt-3 fw-bold">By {author}</p>
          <p>{Description}</p>
          <div className="link-container">
            <Link to={`/post/read/${id}`}> read more</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default PreviewPostCard;
