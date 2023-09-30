import React from "react";
import "./PreviewPostCard.css";

function PreviewPostCard({ id, Title, author, Description }) {
  return (
    <>
      <div className="card m-3 shadow pre-post-card" style={{width: "28rem"}}>
        <div className="card-body">
          <h3>{Title}</h3>
          <p className="mt-3">By {author}</p>
          <p>{Description}</p>
        </div>
      </div>
    </>
  );
}

export default PreviewPostCard;
