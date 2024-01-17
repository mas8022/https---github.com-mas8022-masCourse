import { useLayoutEffect, useState } from "react";
import "./CmsComments.css";

export default function CmsComments() {
  const [comments, setComments] = useState([]);

  useLayoutEffect(() => {
    fetch("http://localhost:4000/api/comments")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setComments(data);
      });
  }, []);

  const deleteCommentHandler = (ID) => {
    fetch(`http://localhost:4000/api/comments/${ID}`, {
      method: "DELETE",
    }).then((res) => res.ok && window.location.reload());
  };

  return (
    <div className="CmsComments">
      {comments.length ?
        comments.map((comment) => (
          <div key={comment.id} className="comment">
            <img src="../../../../public/images/comment.svg" />
            <div className="CmsComments__details">
              <p className="asdfadf">subject</p>
              <p className="rtyqqf">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
                ut blanditiis provident sed vel repudiandae, voluptatum porro in
                molestias rerum odit modi beatae veniam expedita placeat
                assumenda voluptas, iure maiores. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Ipsa cumque eius vero reiciendis
                velit dolore quas. Atque, vel. Corrupti, perspiciatis!
              </p>
              <div className="trawert">
                <div className="stuyqr">
                  <p>
                    {comment.firstName} {comment.lastName}
                  </p>

                  <p>safhgd@gmail.com</p>
                  <p>0934561434123</p>
                </div>
                <div
                  onClick={() => deleteCommentHandler(comment.id)}
                  className="deleteComment image"
                ></div>
              </div>
            </div>
          </div>
        )): (<div className="noComments">
            <img className="image noComments__image" src="../../../../public/images/sad.svg" alt="unavailable-image" />
            <p className="noComments__text">No Comment Here</p>
        </div>)}
    </div>
  );
}
