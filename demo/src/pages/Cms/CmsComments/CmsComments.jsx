import { useEffect, useState } from "react";
import "./CmsComments.css";

export default function CmsComments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://mascourses-back.liara.run/api/comments")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setComments(data);
      });
  }, []);





  const deleteCommentHandler = (ID) => {
    fetch(`https://mascourses-back.liara.run/api/comments/${ID}`, {
      method: "DELETE",
    }).then((res) => res.ok && window.location.reload());
  };

  return (
    <div className="CmsComments">
      {comments.length ? (
        comments.map((comment) => (
          <div key={comment.id} className="comment">
            <img src="..//images/comment.svg" />
            <div className="CmsComments__details">
              <p className="asdfadf">{comment.subject}</p>
              <p className="rtyqqf">{comment.massage}</p>
              <hr />
              <div className="trawert">
                <div className="stuyqr">
                  <p>
                    {comment.firstName} {comment.lastName}
                  </p>

                  <p>{comment.email}</p>
                  <p>{comment.phone}</p>
                </div>
                <div
                  onClick={() => deleteCommentHandler(comment.id)}
                  className="deleteComment image"
                ></div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="noComments">
          <img
            className="image noComments__image"
            src="/images/sad.svg"
            alt="unavailable-image"
          />
          <p className="noComments__text">No Comment Here</p>
        </div>
      )}
    </div>
  );
}
