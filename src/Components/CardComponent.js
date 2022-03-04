import React from "react";

const CardComponent = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.user.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.user.username}</h6>
        <p className="card-text">{props.user.email}</p>
      </div>
    </div>
  );
};

export default CardComponent;
